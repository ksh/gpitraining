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

preamble: '<br><b>GPI Database, Cuestiones Selección Múltiple / Módulo 6</b><br><br>Por favor contesta <b>todas</b> las cuestiones abajo:<br><br>',

  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
    {questionHTML: 'Cual es el propósito de gpidatabase.com?',
     choices: ['Controlar las actividades e impedir el acceso a los usuarios no autorizados',
	      correct('Es el sistema que tenemos para registrar y compartir información, monitorear actividad, evaluar y tener estadísticas de la propagación y el potencial'),
	      'Es el Catálogo de Materiales disponibles',
	      'Es el sistema que usamos para enviar emails entre nosotros, hacer llamadas y ver las novedades de WOPG'],
	lesson: '7.2'},

    {questionHTML: "Cómo sabes que Iniciativas de TV están sucediendo en Sudamérica?", // question can be plain text or arbitrary HTML
     choices: ['Bajo la solapa Assessments hacer una Búsqueda e ingresar SAM% debajo de Región y luego hacer click en Buscar para ver los resultados', 
	      'Enviar un email a help@gpidatabase.com solicitando el reporte',
	      'Bajo la solapa Perfiles Ciudades hacer una Búsqueda e ingresar SAM%',
	      correct('Bajo la solapa Ver Proyectos hacer una Búsqueda e ingresar TV% debajo de Proyecto y SAM% debajo de Región y luego hacer click en Buscar para ver los resultados')],

     // the (optional) lesson associated with this question, which is displayed as a suggestion
     // for further study if the student answers this question incorrectly.
     lesson: '7.1'},

    {questionHTML: 'Donde ingresas tus Assessments?',
     choices: [correct('En la solapa Assessments'),
	       'En la solapa Ver Assessments',
	       'En Google Docs',
	       'En la solapa Eventos GPI-EA'],
     lesson: '7.2'},

    {questionHTML: 'Cómo sabes qué proyectos/iniciativas han logrado alcanzar a más de 250.000 personas?',
     choices: ['Bajo la solapa Ver Proyectos,ver los detalles de cada proyecto, uno a uno, ir a la solapa Status y ver la cantidad de personas alcanzadas',
	       'Bajo la solapa Potencial, ingresar 250000 y dar click en Update',
	       'Es imposible obtener esa información en gpidatabase.com',
	       correct('Bajo la solapa Proj/City ingresar 250000 y dar click en Show')],
      lesson: '7.2'},

    {questionHTML: 'Cómo sabes qué Eventos GPI están planificados en tu región?',
	choices: ['Le preguntas a Karthik por email para asegurarte de tener la última información',
		 correct('Bajo la solapa Eventos GPI-EA haces click en Búsqueda, ingresas tu Región y luego haces click en Buscar para ver los resultadoss'),
		 'Bajo la solapa Ver Proyectos haces click en Búsqueda, ingresas tu Región y luego haces click en Buscar para ver los resultados',
	       'Chequear en el Documento en Google'],
	       lesson: '7.2'},
   ],
  assessmentName: 'a6course', // unique name submitted along with all of the answers
  checkAnswers:false        // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

