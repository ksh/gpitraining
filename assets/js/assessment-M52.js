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

preamble: '<br><b>GPI Recursos Disponibles, Cuestiones Selección Múltiple / Módulo 5</b><br><br>Por favor contesta <b>todas</b> las cuestiones abajo:<br><br>',

  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
    {questionHTML: 'Cual de los siguientes es un recurso disponible para el GPI Rep para apoyar a las comunidades locales?',
     choices: ['Linea de Información',
	      'materialscatalog.com',
	      'wopg.org',
	      'Directrices y Guías para Iniciativas',
	      'Sistema de VMS',
	      correct('Todos los anteriores')],
	lesson: '5.2'},

    {questionHTML: "Cual de los siguientes no es verdad?", // question can be plain text or arbitrary HTML
     choices: ['En wopg.org, Compartir, Artículos hay varios archivos en PDF disponibles para descargar', 
	      'Los Voluntarios pueden crearse un perfil en Participa en wopg.orgg',
	      correct('En materialscatalog.com  puedes ver y descargar videos'),
	      'En tprf.org hay información disponible sobre el Programa de Educación para la Paz'],

     // the (optional) lesson associated with this question, which is displayed as a suggestion
     // for further study if the student answers this question incorrectly.
     lesson: '5.2'},

    {questionHTML: 'Donde puedes encontrar los números de la línea de información de GPI en todos los países?',
     choices: [correct('En Contáctenos en wopg.org'),
	       'En tprf.org',
	       'En Google Docs',
	       'En gpidatabase.com'],
     lesson: '5.2'},


    {questionHTML: 'Las Directrices para Difundir el Mensaje son?',
     choices: ['Un manual completo de como hacer propagación',
	       'Un curso ofrecido por VMS sobre propagación y trabajo en equipo',
	       'Una guía para participar en tprf.org',
	       correct('Un documento de una página con información útil para quienes deseen compartir el mensaje de paz de Prem Rawat')],
      lesson: '5.2'},

    {questionHTML: 'Cual de las siguientes iniciativas cuenta con una guía disponible?',
	choices: ['Universidades',
		 'Ferias y Exhibiciones',
		 'Eventos Locales',
	       correct('Todas las anteriores')],
	       lesson: '5.2'},
   ],
  assessmentName: 'a5course', // unique name submitted along with all of the answers
  checkAnswers:false        // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

