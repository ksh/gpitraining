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

  preamble: '<br><b>Spreading the Message, Multiple-choice Questions / Module 1</b><br><br>Please answer <b>all</b> questions below<br><br>',

  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
    {questionHTML: "Our Focus should be to:", // question can be plain text or arbitrary HTML
     choices: ['Develop a plan to help the largest number of people receive knowledge', 
	      correct('Help get the message out there, and in innovative ways'),
	      'Let people know about the message and help them find out how to receive Knowledge', 
	      '1 & 2'], 
     // the (optional) lesson associated with this question, which is displayed as a suggestion
     // for further study if the student answers this question incorrectly.
     lesson: '3.1'},

    {questionHTML: 'Paving the way means to:',
     choices: ["Create a smooth and enjoyable road so people can receive Knowledge",
               correct('Make it simple and enjoyable for people to easily hear the message'),
	       'Create an enjoyable way for people to be introduced so that they can receive Knowledge',
               '2 & 3'],
	lesson: '3.1'},

    {questionHTML: 'No hidden agenda means:',
     choices: ['People will make the connection for themselves, on their own',
		'Our job is simply to make the message available.',
	        'You can\'t make propagation happen - make the message available & leave people to make their own journey',
	       correct('All of the above')],
      lesson: '3.1'},

    {questionHTML: 'Which of the following statements is untrue',
     choices: ['We need a system of putting the message out there that has no agenda or no hook',
	       'Leave people to watch and listen on their own - just make the message available',
	       correct('GPI representatives will share their clarity, encourage people in the communities to listen to the message and inspire people to practice Knowledge'),
	      'It is best when people make the connections for themselves'],
     lesson: '3.1'},
   ],

  assessmentName: 'a1course', // unique name submitted along with all of the answers
  checkAnswers:false        // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

