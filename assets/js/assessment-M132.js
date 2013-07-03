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

preamble: '<br><b>Línea de Información, Cuestiones Selección Múltiple / Módulo 13</b><br><br>Por favor contesta <b>todas</b> las cuestiones abajo:<br><br>',

  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
    {questionHTML: '¿Cuál es el propósito de la Línea de Información?',
     choices: ['Inscribir a las personas en eventos con M.',
	       'Dar números telefónicos de personas con las cuales se ha perdido contacto.',
	      correct('Apoyar todas las actividades del GPI.'),
	      'Aconsejar a las personas sobre la práctica del Conocimiento.'],
	lesson: '13.2'},

    {questionHTML: "¿Por qué se recopilan las consultas en una base de datos?", // question can be plain text or arbitrary HTML
     choices: ['Para comprobar si algunas personas llaman demasiado a menudo.', 
	      correct('Para proporcionar información a M, de modo que él cuente con otro medio para determinar si necesita visitar ese país.'),
	      'Para contar el número de consultas mensuales.',
	      'Para sacar provecho de nuestros conocimientos de tecnología.'],
     // the (optional) lesson associated with this question, which is displayed as a suggestion
     // for further study if the student answers this question incorrectly.
     lesson: '13.2'},

    {questionHTML: 'Los representantes GPI de servicio al cliente son voluntarios que',
     choices: ['Intentan convencer a la gente de que necesitan el Conocimiento.',
	       'Ayudan a las persona si tienen problemas personales.',
	       'Recogen donaciones en nombre de la organización.',
	      correct('Dan información precisa, oportuna, completa y útil.')],
     lesson: '13.2'},


    {questionHTML: 'Para obtener el número de la Línea de Información del GPI para su país, usted debe',
     choices: ['Marcar el 411 para asistencia del directorio internacional.',
		'Revisar su directorio telefónico local.',
		correct('Ir a WOPG.org y hacer clic en "Contáctenos", en la parte inferior de la Página de Inicio.'),
                'Esperar  el próximo evento con M y preguntar a alguien allí.'],
      lesson: '13.2'},

    {questionHTML: 'El proyecto de Línea de Información del GPI se inició porque',
     choices: ['Todos creían que era una buena idea.',
               'Era una forma en la cual muchas personas podrían participar en un proyecto valioso.',
	       'Ayudaría a promover la cooperación entre países.',
	       correct('M recomendó implementar un sistema de Línea de Información global.')],
	       lesson: '13.2'},
   ],
  assessmentName: 'a13course', // unique name submitted along with all of the answers
  checkAnswers:false        // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

