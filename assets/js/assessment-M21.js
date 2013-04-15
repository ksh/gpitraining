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

  preamble: '<br><b>GPI Rep Training Multiple-choice Test / Module 2</b><br><br>Please answer <b>all</b> questions below<br><br>',

  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
    {questionHTML: "WOPG's objective is:", // question can be plain text or arbitrary HTML
     choices: ['Everyone in the world receives the gift of Knowledge and feels Peace', 
	      correct( "Everyone in the world have an opportunity to hear Prem Rawat's message of Peace at least once, and if they wish to pursue further, the best support is provided"), 
	      'Prem Rawat is recognized as a world expert on Peace', 
	      'Prem Rawat\'s events are held to the highest quality'],
     // the (optional) lesson associated with this question, which is displayed as a suggestion
     // for further study if the student answers this question incorrectly.
     lesson: '1.4'},

    {questionHTML: 'The department dedicated to taking care of the attendees is:',
     choices: ["Maharaji's Event Team (MET)",
               'Event Services Group (ESG)',
               correct('Event Experience Group (EEG)'),
               'Volunteer Management Services (VMS)'],
      lesson: '4.1'},

    {questionHTML: 'GPI\'s role is to:',
     choices: [correct('Support people in their efforts and provide Prem Rawat with accurate information of what is happening'),
               'Push peace initiatives around the world',
               'Ensure that everyone receives the gift of Knowledge',
               'Control the way in which the message is spread'],
      lesson: '2.5'},

    {questionHTML: 'The invitation system works the following way:',
     choices: ['People register a seat online or call to reserve a seat',
	      correct('People request an invitation online or by calling, after which they are asked if they would like to confirm their attendance'),
	      'People on the local contact lists are told to come to the venue directly',
	      'People pay a certain amount to guarantee a seat'],
     lesson: '4.5'},

    {questionHTML: 'What resources can people use to ask for help? ',
     choices:['Event information line and GPI Reps',
	     correct('GPI Reps, GPI information line and email'),
	     'GPI Reps and helpers from the previous system',
	     'GPI information line'],
     lesson: '4.5'},

    {questionHTML: 'What resource can be used to recommend material for an initiative? ',
     choices:[correct('Materials catalog, by calling the GPI information line, asking through GPI email id, or contacting the GPI Rep'),
	     'wopg.org, by calling the GPI information line, asking through GPI email id, or contacting the GPI Rep',
	     'The Keys, by calling the GPI information line, asking through GPI email id, or contacting the GPI Rep',
	     'Media Services Group department, by calling the GPI information line, asking through GPI email id, or contacting the GPI Rep'],
     lesson: '99.99'},

    {questionHTML: 'What metrics are the GPI Reps supposed to be measuring:',
     choices: ['Growth and Local Support',
               'Growth and Access',
               'Growth and Potential (specifically Passion)',
               correct('Potential (specifically Passion) and Local Support')],
     lesson: '2.2'},

    {questionHTML: 'If GPI finds that an initiative that is being done in a community is not really effective, it should:',
     choices: ['Tell the community to stop',
	      'Tell the person in charge of the initiative to stop',
	      'Ask the community to change the people in charge of the initiative',
	      correct('Find out why the initiative is not effective, look for ways to improve and suggest to the community or team doing the initiative')],
     lesson: '2.2'},

     {questionHTML: 'Passion can be defined as:',
      choices: ['How many people are involved in helping to spread the message',
	       'How much the place is growing',
	       correct('The enthusiasm of individuals, how they apply their enthusiasm and the result of their efforts'),
	       'The amount of money spent by individuals, and the result of their efforts'],
     lesson: '2.2'},

     {questionHTML: 'If you (as a member of GPI) find out that there is an issue in another department (especially during event time), you should:',
      choices: ['Not do anything, as doing anything will cause an overlap',
		'Fill in for where the problem is, as we have to all work as a team',
		correct('Not do anything, but immediately provide feedback to the GPI management so that they can take it up with the respective department (if appropriate)'),
		'Fill in where the problem is, and provide feedback to both the GPI management and the other department so that this issue is avoided in the future'],
     lesson: '2.2'}
   ],

  assessmentName: 'a2course', // unique name submitted along with all of the answers
  checkAnswers: false        // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

