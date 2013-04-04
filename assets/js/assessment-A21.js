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

  preamble: '<br><b>GPI Rep Training Multiple-choice Questions / Module 2</b><br><br>Please answer <b>all</b> questions below<br><br>',

  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
    {questionHTML: "The role of the GPI Rep is:", // question can be plain text or arbitrary HTML
     choices: ['To support people', 
	      'To support people even if the person will not appreciate it; what is important is to support them',
	      correct( 'To support people and do it in such a way that they will feel supported.'), 
	      'To pass on the contact details of people asking for support to the infoline.'], 
     // the (optional) lesson associated with this question, which is displayed as a suggestion
     // for further study if the student answers this question incorrectly.
     lesson: '2.1'},

    {questionHTML: 'About GPI Project consultants:',
     choices: ["They are there only to help the GPI Reps",
               'They will only act upon request of the GPI Reps',
	       'They will only act upon request of the Infoline team',
               correct('They will act upon request from anyone needing it: the GPI Reps, Infoline team, CSM or people who t will contact them directly')],
	lesson: '2.1'},

    {questionHTML: 'About City link role:',
     choices: ['The person is responsible for propagation in the City ',
		correct('The person is responsible for just gathering data about local initiatives and inputting the data into the GPI database.'),
	        'The person is responsible for contacting the infoline team at local level',
	        'The person is responsible for organization of local events'],
      lesson: '2.1'},

    {questionHTML: 'About planning for visiting cities:',
     choices: ['I do my plan to visit cities on my own.',
	       'I do my plan to visit cities only to those places that show interest',
	       correct('I do my plan according to the needs, working with Regional manager / Country support manager'),
	      'I do not do any plan; the regional manager will tell me where to go.'],
     lesson: '2.1'},

    {questionHTML: 'About new meetings and new presentations; as GPI rep can I do any new presentation? ',
	choices : [ correct('Yes, but only when I have completed and passed the GPI Representative training for that presentation specifically'),
	     'Yes, always. I\'m a GPI rep and therefore I can do any GPI presentation',
	     'Yes, I\'m very familiar with GPI activities and I feel well prepared to do any presentation.',
	     'No, GPI Reps are not allowed to do all presentations.'],
     lesson: '2.1'},

    {questionHTML: 'About coaching support:',
	choices : ['I will receive coaching support only when the assessment team tells me I need it',
	     'I will receive coaching support after the coaching team has identified some weaknesses',
	     'I will receive coaching support only when it is offered to all the GPI reps.',
	correct('I will receive coaching support when I see the need for it, or when the Assessment and Coaching team suggest it to help me overcome an identified weakness.')],
     lesson: '2,1'},

    {questionHTML: 'About assessment of cities:',
     choices: ['If I\'m not clear about how to do the assessment of cities I\'ll ask the country support manager to do it.',
	correct('If I\'m not clear about how to do the assessment of cities I\'ll asks the assessor team to give me training about it.'),
               'If I\'m not clear about how to do the assessment of cities I\'ll it do anyway, because it is important that the assessment of cities will be done.',
	       'If I\'m not clear about how to do the assessment of cities I\'ll ask the city link because they know all the activities in the area.'],
     lesson: '2.1'},
   ],

  assessmentName: 'a2course', // unique name submitted along with all of the answers
  checkAnswers: false        // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

