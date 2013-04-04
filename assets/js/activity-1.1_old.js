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
  '<b>1.</b> In a mid-sized town, there is a pwk community of 50. 10 are passionate about propagation. They are doing a  event every weekend, in which 1 new person attends each time.<br>',
  '<b>What Potential score would you give to this city?</b><br><br>',

  { questionType:  'freetext',
    correctAnswerRegex: /(3|4)/,
    showAnswerPrompt: 'Check Answer',
    correctAnswerOutput: 'Correct! Can be rated between 3 and 4 because some people are passionate, but there is little impact of their activities. We can help give them ideas to redirect their efforts, which could increase their Potential in the future.',
    incorrectAnswerOutput: 'Please consider reach of propagation in this community',
 },
 '<br><br>',
  '<b>2.</b> In a big city, there is a pwk community of 500, 50 are passionate about propagation. They are doing 5 different initiatives each week, and then 1 big initiative once every 2 months. 300 new people are introduced each month.<br>',
  '<b>What Potential score would you give to this city?</b><br><br>',

  { questionType:  'freetext',
    correctAnswerRegex: /(7|8)/,
    showAnswerPrompt: 'Check Answer',
    correctAnswerOutput: 'Correct! Can be rated between 7 and 8. There is a passionate group that is making an effort, and a sizeable number of people are getting introduced each month.',
    incorrectAnswerOutput: 'Please consider level of passion and reach of propagation in this community',
 },
 '<br><br>',
  '<b>3.</b> In a small town, there is a pwk community of 30. There is no propagation happening. They do local pwk events to keep themselves inspired.<br>',
  '<b>What Potential score would you give to this city?</b><br><br>',

  { questionType:  'freetext',
    correctAnswerRegex: /(0|1)/,
    showAnswerPrompt: 'Check Answer',
    correctAnswerOutput: 'Correct! Can be rated 1 because nothing is happening. GPI should think about sending someone from outside to that place if there is no interest within to do anything.',
    incorrectAnswerOutput: 'Please consider reach of propagation in this community',
 },
 '<br><br>',
  '<b>3.</b> In a small town, there is a pwk community of 400, 5 are passionate about propagation. They are doing 2 different initiatives each week, and then 1 big initiative once every 2 months. 1000 new people are introduced each month. </b><br><br>',

  { questionType:  'freetext',
    correctAnswerRegex: /(9|10)/,
    showAnswerPrompt: 'Check Answer',
    correctAnswerOutput: 'Correct! Can be rated a 9 or 10. The impact is tremendous.  It is not how many who are doing propagation, but what impact it is having. Because it is a small town, the Potential is also higher. If there is a big city with the same numbers, its Potential score will be lower.',
    incorrectAnswerOutput: 'Please consider size of town and reach of propagation',
 },


];

