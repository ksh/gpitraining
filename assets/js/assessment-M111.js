// Copyright 2012 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


// When the assessment page loads, activity-generic.js will render the contents
// of the 'assessment' variable into the enclosing HTML webpage.

// For information on modifying this page, see 
// https://code.google.com/p/course-builder/wiki/CreateAssessments.


var assessment = {
  // HTML to display at the start of the page

preamble: '<br><b>Assessment and Coaching, Multiple-choice Questions / Module 11</b><br><br>Please answer <b>all</b> questions below:<br><br>',

  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
    {questionHTML: 'What is the purpose of Assessment and Coaching?',
     choices: ['to help GPI Reps plan their visits to communities',
	      correct('to support GPI Reps, by monitoring their work with the communities and helping Reps do their role in a better and more enjoyable way.'),
	      'to help GPI Reps in their efforts to increase the level of propagation in communities'],
	lesson: '8.1'},

    {questionHTML: "When should GPI Rep attend Peer Reviews?", // question can be plain text or arbitrary HTML
     choices: ['When invited by Regional Assessor', 
	      'After a visit to a community',
	      'Once every two months to present a visit to a community',
	      'At least once every month',
               correct('At least once every month and once every two months to present a visit to a community')],
     // the (optional) lesson associated with this question, which is displayed as a suggestion
     // for further study if the student answers this question incorrectly.
     lesson: '8.1'},

    {questionHTML: 'Why is coaching an important tool to ensure your continued success?',
     choices: ['A: To help in my assessment and feedback process and to provide support in exploring my inner obstacles that may be impacting my performance.',
	       'B: To provide a continuous process of monitoring GPI Reps performance and designing specific action plans to improve their impact in communities.',
	      correct('A & B')],
     lesson: '8.1'},


    {questionHTML: 'What is the value to the GPI Rep in completing the STOP-START-CONTINUE Assessment?',
     choices: [correct('A: To monitor her feelings/emotions and actions, and be proactive in her role as a GPI Rep.'),
		'B: To allow the Rep to calculate potential score of the community.',
	       'A & B'],
      lesson: '8.1'},

    {questionHTML: 'When should GPI Rep engage in a coaching conversation with the GPI coach?',
     choices: ['Coaching is only needed when the GPI Rep thinks it is necessary.',
	       correct('Coaching takes place at least once a month, preferably after the GPI Rep has visited one community and his/her performance has been evaluated. Coaching conversation may be scheduled by the Rep any time he/she wants to.'),
	       'Only when there is a problem.'],
	       lesson: '8.1'},
   ],
  assessmentName: 'a11course', // unique name submitted along with all of the answers
  checkAnswers:false        // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

