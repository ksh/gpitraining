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

preamble: '<br><b>GPI Rep Resources, Multiple-choice Questions / Module 5</b><br><br>Please answer <b>all</b> questions below:<br><br>',

  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
    {questionHTML: 'Which of the following is a resource available to the GPI Rep to support local communities?',
     choices: ['Information Line',
	      'materialscatalog.com',
	      'wopg.org',
	      'Guidelines and Outlines for Initiatives',
	      'VMS system',
	      correct('All of the above')],
	lesson: '5.1'},

    {questionHTML: "Which of the following is not true?", // question can be plain text or arbitrary HTML
     choices: ['Under wopg.org, Share, Stories there are many PDFs files available for download', 
	      'Volunteers can create a profile under Get involved at wopg.org',
	      correct('At materialscatalog.com  you can view and download videos'),
	      'At tprf.org there is information available on the Peace Education Program'],

     // the (optional) lesson associated with this question, which is displayed as a suggestion
     // for further study if the student answers this question incorrectly.
     lesson: '5.1'},

    {questionHTML: 'Where can you find the GPI Information line numbers for all the countries?',
     choices: [correct('In Contact Us at wopg.org'),
	       'At tprf.org',
	       'On Google Docs',
	       'At gpidatabase.com'],
     lesson: '5.1'},


    {questionHTML: 'Guidelines for Spreading the Message are?',
     choices: ['A complete manual on how to do propagation',
	       'A course offered by VMS on propagation and teamwork',
	       'A guide to participate at tprf.org',
	       correct('A one page document with helpful information for those wishing to share Prem Rawat\'s message of peace')],
      lesson: '5.1'},

    {questionHTML: 'Which of the following initiatives have an outline available?',
	choices: ['University',
		 'Fairs and Exhibits',
		 'Local Events',
	       correct('All of the above')],
	       lesson: '5.1'},
   ],
  assessmentName: 'a5course', // unique name submitted along with all of the answers
  checkAnswers:false        // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

