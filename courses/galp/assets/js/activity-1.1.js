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

  '<table border="2"><tr><td><b>A Galp no Mundo:</b><p><ul><li>Nos últimos anos a Galp tem desenvolvido a sua atividade por todo o mundo.</ul><p></tr></td></table>',
  '<p/>',
  '<b>1.</b> Em quantos continentes a Galp tem operações?<br>',
  { questionType: 'multiple choice',
    choices: [['1', false, 'Por favor, tente de novo.'],
              ['2', false, 'Por favor, tente de novo.'],
              ['3', true, 'Correto! A Galp está a operar na Europa, África e América do Sul.'],	     
              ['4', false, 'Por favor, tente de novo.']]},

  '<br><p/>',
  '<br><b>2.</b> Em que país, fora da Europa, a Galp tem maior implantação? ',
  '<br>',
  { questionType: 'freetext',
    correctAnswerRegex: /Brasil?/i,
    correctAnswerOutput: 'Correto!',
    incorrectAnswerOutput: 'Tente de novo. Considere os países em que a Galp começou primeiro a sua atividade fora de Portugal.',
    showAnswerPrompt: 'O nosso perito diz. As vendas da Galp no Brasil, em 2012 alcançaram xxxx.', },


];

