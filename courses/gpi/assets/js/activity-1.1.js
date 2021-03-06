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

var activity = [

  '<table border="2"><tr><td><b>Determine Potential:</b><p><ul><li>Please determine Potential for four different communities, presented below</ul><p></tr></td></table>',
  '<p/>',
  '<b>1.</b> In a mid-sized town, there is a pwk community of 100. 20 are passionate about propagation. They are doing a  event every weekend, in which 1 new person attends each time.<br>',
  '<b>What Potential score would you give to this city?</b><br><br>',

  { questionType:  'freetext',
    correctAnswerRegex: /(3|4)/,
    showAnswerPrompt: 'Check Answer',
    correctAnswerOutput: 'Correct! Some people are passionate, but there is little impact in their activities.',
    incorrectAnswerOutput: 'Please consider reach of propagation in this community',
 },
 '<br><br>',
  '<b>2.</b> In a big city, there is a pwk community of 5000, 50 are passionate about propagation. They are doing 7 different initiatives each week, and then 1 big initiative once every 2 months. 300 new people are introduced each month.<br>',
  '<b>What Potential score would you give to this city?</b><br><br>',

  { questionType:  'freetext',
    correctAnswerRegex: /(8|9)/,
    showAnswerPrompt: 'Check Answer',
    correctAnswerOutput: 'Correct! There is a passionate group that is making an effort, and a sizable number of people are getting introduced each month.',
    incorrectAnswerOutput: 'Please consider level of passion and reach of propagation in this community',
 },
 '<br><br>',
  '<b>3.</b> In a small town, there is a pwk community of 100. There is no propagation happening. They do local pwk events to keep themselves inspired.<br>',
  '<b>What Potential score would you give to this city?</b><br><br>',

  { questionType:  'freetext',
    correctAnswerRegex: /1/,
    showAnswerPrompt: 'Check Answer',
    correctAnswerOutput: 'Correct! Potential should be 1 because nothing is happening',
    incorrectAnswerOutput: 'Please consider reach of propagation in this community',
 },
 '<br><br>',
  '<b>3.</b> In a small town, there is a pwk community of 200, 5 are passionate about propagation. They are doing 2 different initiatives each week, and then 1 big initiative once every 2 months. 2000 new people are introduced each month. </b><br><br>',

  { questionType:  'freetext',
    correctAnswerRegex: /(9|10)/,
    showAnswerPrompt: 'Check Answer',
    correctAnswerOutput: 'Correct! Can be rated 9 or 10 because the impact is tremendous, considering it is a small town. A big city with these numbers would have a lower potential',
    incorrectAnswerOutput: 'Please consider size of town and reach of propagation',
 },


];

