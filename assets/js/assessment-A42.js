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

  preamble: '<br><b>VMS Briefing, Multiple-choice Questions / Módulo 4</b><br><br>Por favor, contesta <b>todas</b> las cuestiónes abajo<br><br>',

  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
    {questionHTML: '¿Cuál es el objetivo principal de los servicios de gestión del voluntariado?', // question can be plain text or arbitrary HTML
     choices: ['Inspirar a las personas para ser voluntarios en la WOPG.', 
               'Administrar los voluntarios, de tal manera que se ahorre dinero para la organización y estos recursos puedan ser desviados a otros proyectos más importantes.',
		correct('Crear un ambiente donde la gente pueda disfrutar de las oportunidades de voluntariado.'),
	      'Aprovechar el trabajo de los voluntarios para hacer el trabajo lo más eficiente y rentable posible.'], 
     // the (optional) lesson associated with this question, which is displayed as a suggestion
     // for further study if the student answers this question incorrectly.
     lesson: '3.1'},

    {questionHTML: '¿Cuáles son los tres tipos diferentes de oportunidades de  inserción?',
     choices: ['Real; Falsa; Donación.',
               correct('Apoyo; Virtual; Física.'),
	       'Evento; No-Evento, dar.',
               'Oficial de la WOPG;  no oficial de la WOPG; TPRF.'],
	lesson: '3.1'},

    {questionHTML: '¿Cómo puedo crear un perfil de voluntario si no tengo un correo electrónico?',
     choices: [correct('Ver al  Rep. de la VMS (si está presente) o al Rep de la GPI después de la presentación para rellenar un Manual Inserción. Estos datos serán enviados al Equipo de Introducción de Datos   la VMS para que sean completados.'),
	       'Llamar a la Línea GPI en tu país y pedir que le ayuden a crear un perfil.',
	       'Pedir a un amigo que me cree  un email \'falso\' y usarlo para crear un perfil de voluntario en línea',
	      'Usar el correo electrónico de mi amigo para crear un perfil de voluntario en mi nombre.'],
     lesson: '3.1'},


    {questionHTML: '¿Cuáles son los 5 filtros disponibles para ayudar a un voluntario en la búsqueda de las Últimas Oportunidades?',
     choices: ['Evento/no-evento global en vivo, país, ciudad, palabra clave, área.',
		'Región; Tipo de Oportunidad; Evento / no-evento, ciudad, zona.',
	        'Tipo de Oportunidad, zona, región, palabra clave,  ciudad.',
	       correct('Palabra clave; evento/no-evento mundial en vivo , tipo de Oportunidad; País; Area.')],
      lesson: '3.1'},

    {questionHTML: 'El propósito de los administradores al evaluar el desempeño voluntario y mantenerlo en el perfil del voluntario es asegurarse de que:',
     choices: ['Los voluntarios sean humillados y castigados cuando hacen un mal trabajo',
		'Crear más burocracia que nadie usa.',
	       correct('Asegurarse que la VMS posicione voluntarios más capacitados en los roles.'),
	       'Asegurarse de que  las debilidades de los voluntarios sean identificadas y que puedan ser enviados a entrenamiento.'],
	       lesson: '3.1'},
   ],

   assessmentName: 'a4course', // unique name submitted along with all of the answers
  checkAnswers:false        // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

