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

preamble: '<br><b>Information Line, Multiple-choice Questions / Module 13</b><br><br>Please answer <b>all</b> questions below:<br><br>',

  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
    {questionHTML: 'What is the purpose of the Information Line?',
     choices: ['To register people for events with M.',
	       'To provide phone numbers of people you\'ve lost touch with.',
	      correct('To support all the activities of GPI.'),
	      'To advise people on the practice of Knowledge.'],
	lesson: '13.1'},

    {questionHTML: "Why are inquiries collected into a database?", // question can be plain text or arbitrary HTML
     choices: ['To check whether some callers call too often.', 
	      correct('To provide info to M so he has another means of determining whether he needs to visit that country.'),
	      'To count the number of monthly inquiries.',
	      'To take advantage of our tech expertise.'],
     // the (optional) lesson associated with this question, which is displayed as a suggestion
     // for further study if the student answers this question incorrectly.
     lesson: '13.1'},

    {questionHTML: 'GPI Customer Service Representatives are volunteers who',
     choices: ['try to convince people that they need Knowledge.',
	       'provide assistance if the person is having personal issues.',
	       'collect contributions on behalf of the organization.',
	      correct('give information that is accurate, timely, complete, and useful.')],
     lesson: '13.1'},


    {questionHTML: 'To find the GPI information line number for your country, you should?',
     choices: ['dial 411 for international directory assistance.',
		'check your local telephone directory.',
		correct('go to WOPG.org and click on "Contact Us" at the bottom of the home page.'),
	       'wait for the next event with M and ask someone there.'],
      lesson: '13.1'},

    {questionHTML: 'The GPI Information Line Project began',
     choices: ['because everyone thought it was a good idea.',
	       'it was a way many people could participate in a worthy project.',
	       'it would help promote cooperation between countries.',
	       correct('M recommended the development of a global information line system.')],
	       lesson: '13.1'},
   ],
  assessmentName: 'a13course', // unique name submitted along with all of the answers
  checkAnswers:false        // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

