# Copyright 2012 Google Inc. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS-IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Classes and methods to manage all aspects of student assessments."""

__author__ = 'pgbovine@google.com (Philip Guo)'

import datetime
import json
from models import models
from models import utils
from models.models import Student
from models.models import StudentAnswersEntity
from utils import BaseHandler
from google.appengine.ext import db

# questions per module - training 2 - 12 modules
# last is postcourse
MODULE_QUESTIONS =  [4,10,7,5,5,5,5,7,5,5,5,11,7]
# mandatory modules 1 to 8
MANDATORY_MODULES = 8
# number of question modules
MAX_MODULES = 12

def calc_total_score(student):
    #
    mn = MODULE_QUESTIONS
    mm = MANDATORY_MODULES
    #
    overall_score = -1
    ms = []
    for i in range(1,MAX_MODULES+1):
      course = 'a'+str(i)+'course'  
      ms.append(utils.get_score(student, course))

    # complete = mandatory modules are done (have scores)
    complete = True
    for score in ms[:MAX_MODULES]:
	complete = complete and score <> None    

    # compute overall score after mandatory modules are done
    if complete:
        part_score = 0
        tq = 0
	for i in range(MAX_MODULES):
	  if ms[i] <> None:
	    part_score +=  mn[i] * ms[i]
	    tq += mn[i]

        overall_score = int(part_score/tq)

    return overall_score


def store_score(student, assessment_type, score):
    """Stores a student's score on a particular assessment.

    Args:
        student: the student whose data is stored.
        assessment_type: the type of the assessment.
        score: the student's score on this assessment.

    Returns:
        the (possibly modified) assessment_type, which the caller can
        use to render an appropriate response page.
    """
    # FIXME: Course creators can edit this code to implement custom
    # assessment scoring and storage behavior
    # TODO(pgbovine): Note that the latest version of answers are always saved,
    # but scores are only saved if they're higher than the previous attempt.
    # This can lead to unexpected analytics behavior. Resolve this.
    existing_score = utils.get_score(student, assessment_type)
    # remember to cast to int for comparison
    if (existing_score is None) or (score > int(existing_score)):
        utils.set_score(student, assessment_type, score)

    # special handling for computing final score:
    if assessment_type == 'postcourse':
        midcourse_score = utils.get_score(student, 'midcourse')
        if midcourse_score is None:
            midcourse_score = 0
        else:
            midcourse_score = int(midcourse_score)

        if existing_score is None:
            postcourse_score = score
        else:
            postcourse_score = int(existing_score)
            if score > postcourse_score:
                postcourse_score = score

        # Calculate overall score based on a formula
        overall_score = calc_total_score(student)

        # TODO(pgbovine): this changing of assessment_type is ugly ...

        if overall_score == 100:
            assessment_type = 'postcourse_100'
	else:
	  if overall_score >= 90:
            assessment_type = 'postcourse_pass'
          else:
	    if overall_score > 0:
                assessment_type = 'postcourse_fail'
	    else:
	        assessment_type = 'not_complete'
#        utils.set_score(student, 'overall_score', overall_score)

        # store the overall_score of the first run of training in post_course 
#	post_s=  utils.get_score(student, 'postcourse')
	if utils.get_score(student, 'postcourse') == 0 and (overall_score > -1) :
          utils.set_score(student, 'postcourse', overall_score)
          utils.set_score(student, 'overall_score', overall_score)
	  
    over_s=  utils.get_score(student, 'overall_score')
    if over_s <> None:
      overall_score = calc_total_score(student)
      utils.set_score(student, 'overall_score', overall_score)

    return assessment_type


class AnswerHandler(BaseHandler):
    """Handler for saving assessment answers."""

    # Find student entity and save answers
    @db.transactional(xg=True)
    def update_assessment_transaction(
        self, email, assessment_type, new_answers, score):
        """Stores answer and updates user scores."""
        student = Student.get_by_email(email)

        # It may be that old Student entities don't have user_id set; fix it.
        if not student.user_id:
            student.user_id = self.get_user().user_id()

        answers = StudentAnswersEntity.get_by_key_name(student.user_id)
        if not answers:
            answers = StudentAnswersEntity(key_name=student.user_id)
        answers.updated_on = datetime.datetime.now()

        utils.set_answer(answers, assessment_type, new_answers)

        assessment_type = store_score(student, assessment_type, score)

        student.put()
        answers.put()

        # Also record the event, which is useful for tracking multiple
        # submissions and history.
        models.EventEntity.record(
            'submit-assessment', self.get_user(), json.dumps({
                'type': 'assessment-%s' % assessment_type,
                'values': new_answers, 'location': 'AnswerHandler'}))

        return (student, assessment_type)

    def post(self):
        """Handles POST requests."""
        student = self.personalize_page_and_get_enrolled()
        if not student:
            return

        if not self.assert_xsrf_token_or_fail(self.request, 'assessment-post'):
            return

        assessment_type = self.request.get('assessment_type')

        # Convert answers from JSON to dict.
        answers = self.request.get('answers')
        if answers:
            answers = json.loads(answers)
        else:
            answers = []

        # TODO(pgbovine): consider storing as float for better precision
        score = int(round(float(self.request.get('score'))))

        # Record score.
        (student, assessment_type) = self.update_assessment_transaction(
            student.key().name(), assessment_type, answers, score)

        self.template_value['navbar'] = {'course': True}
        self.template_value['assessment'] = assessment_type
        self.template_value['student_score'] = utils.get_score(
            student, 'overall_score')
        self.render('test_confirmation.html')
