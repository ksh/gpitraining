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

preamble: '<br><b>Estimar Audiencia de un Evento, Prueba Selección Múltiple / Módulo 9</b><br><br>Por favor contesta <b>todas</b> las cuestiones abajo:<br><br>',

  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
    {questionHTML: 'Se ha considerado una localidad de tu región para realizar un evento. Las personas que lo saben están muy entusiasmadas. Para obtener un estimado de asistencia, llamas a los contactos y representantes locales. Te dan una cifra estimada. Cuando les preguntas cuáles son las razones para este estimado, ¿cuál de estas respuestas te parece aceptable?',
     choices: ['Es lo que creemos que podremos alcanzar. Confiamos en llegar a este número de asistencia. Está basado en el entusiasmo que hay.',
	      correct('Es lo que creemos que podremos alcanzar. Se basa en la cantidad de personas que vendrán por el programa de TV (ya sea por el número que asistieron la vez anterior o por cuántos sabemos que miran el programa), y los invitados que traeremos (basados en nuestro plan de promoción y en el número que la comunidad espera invitar). Si no sabemos cuántos están mirando el programa en TV, pero sabemos que la audiencia es mucha, podremos dar un estimado cauteloso.'),
	      'Es lo que creemos que podremos alcanzar. Se basa en cuántos vendrán por la TV, no sabemos cuántos están viendo el programa o cuántos responderán. El número de asistentes locales también se basa en el nivel de entusiasmo que existe.',
	      'Es mi opinión. He hecho esto por muchos años y confío en mi estimado.'],
	lesson: '9.2'},

    {questionHTML: "Dar información acerca de todos los posibles días malos para hacer un evento es importante. Aún cuando creamos saber cuándo M puede venir. Verdadero o Falso.", // question can be plain text or arbitrary HTML
     choices: [correct('Verdadero. M puede elegir venir en cualquier época del año. Si él decide venir, y no tenemos la lista de días correctos, somos responsables por el esfuerzo en vano de M y de todas las personas que hacen posible la realización de los eventos.'), 
	      'Falso. Esta información es necesaria únicamente en la estación del año en que M usualmente viene. Dar demasiada información tampoco es bueno.',
	      'Verdadero. Pero solamente necesitamos dar la lista de los días malos excluyendo las estaciones del año ya que de ello se encarga otro equipo.',
	      'Ninguna de las anteriores.'],

     // the (optional) lesson associated with this question, which is displayed as a suggestion
     // for further study if the student answers this question incorrectly.
     lesson: '9.2'},

    {questionHTML: '¿Cómo empezamos a calcular el tamaño de  nuestra audiencia?',
     choices: ['Empezamos por el peor día para hacer un evento, sea cual sea el día de la semana.',
	       'Empezamos por el fin de semana para hacer un evento.',
	       'Empezamos por un día de semana para hacer un evento.',
	      correct('Empezamos por el mejor día para la realización de un evento, independientemente del día de la semana que este sea.')],
     lesson: '9.2'},

    {questionHTML: '¿Cómo proponemos la hora ideal para comenzar un evento?',
     choices: ['Basados en la hora más conveniente para las personas con el conocimiento, por cada día de la semana.',
	       correct('Basados en lo más conveniente para todas las personas que en general atenderán al evento, por cada día de la semana.'),
	       'Basados en lo más conveniente para M.',
	       'Basados en lo más conveniente para las personas que ven el programa en TV, por cada día de la semana.'],
     lesson: '9.2'},

    {questionHTML: '¿Qué haría si se da cuenta de que tu estimado de audiencia estuvo mal?',
     choices: ['Nada, tuvimos un maravilloso evento con M.',
		'Encontraremos la razón si la asistencia fue menor y lo anotaremos para futuras referencias.',
	       correct('Encontraremos la razón y la anotaremos para futuras referencias.'),
		'Encontraremos la razón si es que la asistencia fue menor. Si nuestro estimado fue menor y vino mas gente de la esperada, provocando que no hubiera lugar en la sala, es grandioso, aun a M le gusta que la audiencia exceda la capacidad de la sala.'],
      lesson: '9.2'},

   ],
  assessmentName: 'a9course', // unique name submitted along with all of the answers
  checkAnswers:false        // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

