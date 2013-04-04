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



  preamble: '<br><b>Gracias por completar la formación. </b><br><br>Te presentamos una serie de afirmaciones. Expresa si estás de acuerdo o no y en qué medida.<br>No te preocupes si tu respuesta no encaja exactamente en ninguna de las opciones presentadas, señala la respuesta que sientas que más se acerca.<br><br> ', 


  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
    {questionHTML: "He aprendido mucho y también se aclararon mis dudas acerca del rol del Representante de GPI", // question can be plain text or arbitrary HTML
     choices: ['Totalmente de acuerdo',
	       'Parcialmente de acuerdo',
	       'Neutral',
	       'Parcialmente en desacuerdo',
	       'Totalmente en desacuerdo'],
    },

    {questionHTML: 'El contenido presentado en el curso fue de muy buena calidad',	  
     choices: ['Totalmente de acuerdo',
	       'Parcialmente de acuerdo',
	       'Neutral',
	       'Parcialmente en desacuerdo',
	       'Totalmente en desacuerdo'],
    },

    {questionHTML: 'El formato "online" es una forma excelente de hacer la formación',
     choices: ['Totalmente de acuerdo',
	       'Parcialmente de acuerdo',
	       'Neutral',
	       'Parcialmente en desacuerdo',
	       'Totalmente en desacuerdo'],
    },

        {questionHTML: 'Me resultó sencillo acceder a la plataforma y hacer el entrenamiento a mi propio ritmo.',
     choices: ['Totalmente de acuerdo',
	       'Parcialmente de acuerdo',
	       'Neutral',
	       'Parcialmente en desacuerdo',
	       'Totalmente en desacuerdo'],
    },

    {questionHTML: 'Escribe una o dos cosas que te hayan gustado de la formación:',
     correctAnswerRegex: /""/, 
    },

    {questionHTML: 'Escribe una o dos cosas que podrían mejorarse para el próximo grupo de personas que participe de la formación',
     correctAnswerRegex: /""/, 
    },

    {questionHTML: 'Cualquier otro comentario',
     correctAnswerRegex: /""/, 
    },
  ],

  assessmentName: 'postcourse', // unique name submitted along with all of the answers
  checkAnswers: false     // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

