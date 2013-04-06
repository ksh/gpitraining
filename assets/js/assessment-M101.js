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

preamble: '<br><b>Events Invitation / Module 10</b><br><br>Please answer <b>all</b> questions below:<br><br>',

  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
    {questionHTML: 'Which of the following statements is true?',
     choices: ['A. The local organisation defines the criteria for obtaining an invitation to their event and passes the info to wopg',
	      'B. WOPG defines the criteria for attendance at events with Prem Rawat, dependent upon what is best for the area',
	      'C. Local people always have priority',
	      correct('D. B & C')],
	lesson: '11.1'},

    {questionHTML: 'Which of the following statements is untrue?',
     choices: ['It is not possible to use the online system to request an invitation for more than one person',
	      correct('It is not possible to request an invitation for more than one person'),
	      'I can use the Events phone line to request a number of invitations so I can invite my family',
	      'I can sit with my friends at the event by picking up our tickets together in the lobby'],
	lesson: '11.1'},

        {questionHTML: 'Which of the following statements is true?',
	 choices: ['It is not possible to sit with your family at an event because it is only one invitation per email',
		  correct('If I want to sit with my family at the event we should pick up our seats in the lobby'),
		  'If you want to sit with your family you should look for the family button when using the online system',
		  'GPI Reps hold a number of invitations to help those who want to sit with their family'],
	lesson: '11.1'},

        {questionHTML: 'Which of the following statements is true?',
	 choices: ['You must have an email account to be able to request an invitation to an event with Prem Rawat',
		   correct('If you don\'t have an email you can ring the events phone line to request an invitation'),
			  'If you don\'t have an email you can ring the events phone line but only for an invitation for yourself',
		   'It is definitely not possible to request an invitation if I don\'t have an email account or a phone'],
	lesson: '11.1'},

	{questionHTML: 'Which of the following statements is untrue? GPI Representatives can help with the invitation system by',
	 choices: ['Knowing the events helpline phone number and passing it on to those who need it',
		  'Contacting EEG ( Event Experience Group) if there are a large number of people in the community needing support and agree a solution with EEG',
		  correct('Negotiating with EEG for a number of spare tickets to be used when absolutely needed'),
		  'Requesting an invitation for someone who needs help'],
	lesson: '11.1'},		   

   ],
  assessmentName: 'a10course', // unique name submitted along with all of the answers
  checkAnswers:false        // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

