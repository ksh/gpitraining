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

preamble: '<br><b>Promoción de los Eventos con Prem Rawat / Módulo 8</b><br><br>Por favor contesta <b>todas</b> las cuestiones abajo:<br><br>',

  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
    {questionHTML: '¿Cuál de las siguientes afirmaciones es verdadera?',
     choices: ['PAD (Promoción, Publicidad y Distribución) es responsable de la promoción de los eventos con Prem Rawat.',
	      correct('Todo el equipo de GPI (Iniciativa de Paz Global) es responsable de la promoción de los eventos de Prem Rawat entre las personas que están interesadas y para realizar esta labor con éxito se sirve de la ayuda profesional de PAD.'),
	      'PR (Relaciones Públicas) y PAD trabajan juntos como responsables de la promoción de los eventos de Prem Rawat, pero colaboran con GPI cuando es necesario y apropiado.',
	      'La comunidad local en donde el evento tiene lugar es totalmente responsable  de la promoción de dicho evento entre las personas que estén interesadas en su zona.'],
	lesson: '10.2'},

    {questionHTML: "Promoción es", // question can be plain text or arbitrary HTML
     choices: ['A. Asegurarse de que todos los habitantes de la zona sepan que Maharaji viene a hablar a un evento.t',
	       correct('B. Asegurarse de que las personas interesadas en el mensaje sean informadas de la visita de Prem Rawat a su comunidad.'), 
	      'C. Gastarse la mayor cantidad de dinero posible en publicidad para que pueda venir el mayor número de personas.',
	      'D. A y B.'],

     // the (optional) lesson associated with this question, which is displayed as a suggestion
     // for further study if the student answers this question incorrectly.
     lesson: '10.2'},

    {questionHTML: '¿Cuál de las siguientes afirmaciones es verdadera?',
     choices: ['A. El equipo global de GPI creará los materiales para los equipos locales de GPI para promocionar los eventos con Prem Rawat.',
	       'B. PAD proveerá los materiales necesarios para que GPI pueda promocionar los eventos; por ejemplo, spots para radio y televisión, y material de prensa.',
	       'C. PAD proveerá pósters e invitaciones para ayudar a que GPI promocione los eventos.',
	      correct('D. B y C')],
     lesson: '10.2'},

    {questionHTML: '¿Cuál de las siguientes afirmaciones es verdadera?',
     choices: ['Repartir folletos ha resultado ser una herramienta de promoción efectiva y de bajo coste, por lo que se está fomentando como una de las principales actividades de difusión en las comunidades locales..',
	      'Se ha aconsejado a las comunidades que no involucren a los aspirantes en las actividades de difusión.',
	       'Usar las redes sociales puede ser contraproducente en lo que se refiere a Relaciones Públicas, por lo que debería evitarse en la promoción de eventos con Prem Rawat.',
	      correct('Ninguna de las tres es verdadera.')],
     lesson: '10.2'},

    {questionHTML: '¿Cuál de las siguientes afirmaciones es verdadera?',
     choices: ['Cuando utilizamos la televisión para promocionar un evento, acudimos a las cadenas que emiten los programas de Palabras de Paz.',
	       'Podemos personalizar con información local los spots de 30 segundos producidos por MSG (Departamento de Medios de Comunicación) y emitirlos antes y después de la retransmisión local. También podemos ponerlos en esta misma cadena en distintas horas.',
		'Si queremos promocionar un evento en otros canales, hemos de usar un spot promocional diferente.',
	       correct('Los tres son verdaderos.')],
      lesson: '10.2'},

    {questionHTML: '¿Cuál de estas afirmaciones es verdadera?',
     choices: ['Nunca deberían usarse folletos / impresos en la promoción de los eventos de Prem Rawat.',
	      correct('Pueden usarse folletos / impresos siempre y cuando las personas tengan la opción de recogerlos o no.'),
	      'Depende de la calidad de los folletos que se puedan repartir o no.',
	      'Depende de la calidad de los folletos. Pueden darse folletos baratos para mantener un coste bajo.'], 
      lesson: '10.2'},

    {questionHTML: '¿Cuál de estas afirmaciones es verdadera?',
     choices: [ 'Se aconseja tener un representante del equipo de RP en las promociones regionales para facilitar / aconsejar cuando se contacte con los medios de comunicación / prensa.',
  	        'El equipo de RP debería involucrarse en caso de que la comunidad tenga, por ejemplo, la oportunidad de realizar una entrevista en algún periódico o emisora de radio local.',
                'El equipo de RP no ha de involucrarse en todas y cada una de las actividades promocionales.',
	        correct('Las tres son verdaderas.')],
      lesson: '10.2'},		
   ],
  assessmentName: 'a8course', // unique name submitted along with all of the answers
  checkAnswers:false        // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

