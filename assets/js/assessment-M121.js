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


// Usage instructions: Create a single array variable named 'activity'. This
// represents explanatory text and one or more questions to present to the
// student. Each element in the array should itself be either
//
// -- a string containing a set of complete HTML elements. That is, if the
//    string contains an open HTML tag (such as <form>), it must also have the
//    corresponding close tag (such as </form>). You put the actual question
//    text in a string.
//
// -- a JavaScript object representing the answer information for a question.
//    That is, the object contains properties such as the type of question, a
//    regular expression indicating the correct answer, a string to show in
//    case of either correct or incorrect answers or to show when the student
//    asks for help. For more information on how to specify the object, please
//    see http://code.google.com/p/course-builder/wiki/CreateActivities.

var assessment = {
  // HTML to display at the start of the page
  preamble: '<b>Peace Education Program, mutiple-choice questions. Module 12. Please answer <B>all<B> questions below</b><br><br>',

  questionsList: [

  {questionHTML: 'What does PEP stand for?',
     choices : ['Prison Education Project',
	        correct('Peace Education Program'),
	      'Peace Education Project'],
     lesson: '12.1'},

  {questionHTML: 'As a GPI rep, how can you help?',
     choices : ['Stand back and let people do it on their own',
	       'Find people to do PEP programs',
	       correct('Direct people to resources')],

     lesson: '12.1'}, 	  


  {questionHTML:  'Why is PEP part of TPRF?',
    choices : ['Because WOPG is too busy',
	      'TPRF has more funds',
	       correct('TPRF promotes PR\'s message of peace and can reach people who might not 	otherwise be reached')],

    lesson: '12.1'},

  {questionHTML:  'What makes PEP unique?',
    choices : ['It is the first academic study of peace',
	      correct('Prem Rawat addresses the core of a human being with no judgment'),
	      'It is the intro to referring people to the Keys'],
    lesson: '12.1'},

  {questionHTML:  'What is the first team standard for PEP?',
    choices : [correct('Be a team player'),
	      'Focus on the growth of PEP',
	      'Don\'t screw up'],
    lesson: '12.1'},

  {questionHTML:  'What is one facilitator quality?',
    choices : ['Someone who can explain Knowledge well',
	      'Someone who sympathizes with people',
	      correct('Someone who has good listening skills')],
    lesson: '12.1'},

  {questionHTML:  'How are PEP facilitators trained?',
    choices : ['During a two-day regional PEP Training Conference',
	      correct('On a briefing call and during monthly PEP calls'),
	      'They are given a manual to study and be tested on'],
    lesson: '12.1'},

    {questionHTML:  'Which of these is included in the 7 PEP Process steps?',
    choices : ['Watch the PEP kit videos to see if you want to show them',
               'Email PEP asking where you should plug in',
	      correct('Form a team and decide what organizations to contact')],
    lesson: '12.1'},

  {questionHTML:  'What does PEP need from teams?',
    choices : ['More suggestions of where to expand PEP',
	      correct('Statistics and feedback from participants'),
	      'Comments from the teams what they don\'t like'],
    lesson: '12.1'},

  {questionHTML:  'How do PEP teams stay in touch?',
    choices : [correct('Monthly PEP conference calls'),
	      'Tell all their friends to write to TPRF',
	      'Write suggestions in the PEP Google Team conference'],
    lesson: '12.1'},

  {questionHTML:  'What is the follow up to PEP if someone is interested?',
    choices : ['There isn\'t any; it\'s just a 10-week program',
	      'Give out cards with the Keys website info',
	      correct('Watch more videos on Prem Rawat\'s message')],
    lesson: '12.1'},

],
  assessmentName: 'a12course', // unique name submitted along with all of the answers
  checkAnswers: false           // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

