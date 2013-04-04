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

  preamble: '<br><b>Equipo de Areas Existentes de GPI - Cuestiones / Modulo 2</b><br><br>Por favor conteste a <b>todas</b> las cuestiones abajo<br><br>',

  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
    {questionHTML: "El rol de los reps de GPI es:", // question can be plain text or arbitrary HTML
     choices: ['Apoyar a las personas', 
	       'Apoyar a las personas aunque la persona no lo vaya a apreciar; lo importante es apoyarles',
	correct('Apoyar a las personas y hacerlo de tal forma que se sientan respaldados'), 
	      'Pasar a la linea de informacion los detalles de los contactos de las personas que esten solicitando apoyo'], 
     // the (optional) lesson associated with this question, which is displayed as a suggestion
     // for further study if the student answers this question incorrectly.
     lesson: '2.2'},

    {questionHTML: 'Sobre los consultores de los Proyectos de GPI:',
     choices: ["Solo estan ahi para ayudar a los reps de GPI",
	       'Actuaran solo cuando lo soliciten los reps de GPI',
	       'Actuaran solo cuando lo solicite el equipo de la linea de informacion',
	       correct('Actuaran cuando cualquier equipo o persona tenga necesidad de ellos: los reps de GPI, el equipo de la infolinea, CSM o las personas que les contacten directamente')],
	lesson: '2.2'},

    {questionHTML: 'Respecto a el enlace de ciudades:',
     choices: ['La persona es responsable de la propagacion en la ciudad',
	       correct('La persona es responsable unicamente de reunir los datos sobre las iniciativas locales y de llevar esos datos a la base de datos de GPI'),
	       'La persona es responsable de contactar el equipo de la infolinea, a nivel local',
	       'La persona es responsable de la organizacion de los eventos locales'],
      lesson: '2.2'},

    {questionHTML: 'Sobre el planeamiento de visitas a las ciudades:',
     choices: ['Yo hago el plan para visitar a las ciudades por mi propia cuenta',
	       'Yo hago el plan para visitar a las ciudades en aquellos lugares que muestren interes',
	       correct('Yo hago el plan de acuerdo a las necesidades, trabajando con el  Gerente Regional / Gerente de Apoyo del pais'),
	       'Yo no hago ningun plan; el gerente regional me dira a donde tengo que ir'],
     lesson: '2.2'},

     {questionHTML: 'Respecto a las nuevas reuniones y nuevas presentaciones; como Rep de GPI puedo hacer alguna otra nueva representacion?',
	choices : [ correct('Si, pero solo cuando yo haya completado y aprobado el entrenamiento para Representantes de GPI para esa presentacion especificamente'),
		'Si, siempre. Yo soy un rep de GPI y por consiguiente yo puedo hacer cualquier presentacion de GPI',
	        'Si, estoy muy familiarizado con las actividades de GPI y me siento bien preparado para hacer cualquier presentacion',
	        'No, a los Reps de GPI no se les permite hacer todas las presentaciones'],

     lesson: '2.2'},

    {questionHTML: 'Respecto a el entrenamiento de apoyo:',
	choices : ['Recibire entrenamiento de apoyo solo cuando el equipo de asesoramiento me diga que lo necesito',
	           'Recibire entrenamiento de apoyo despues de que el equipo de entrenamiento haya identificado algunas debilidades',
	           'Recibire entrenamiento de apoyo solo cuando se le haya ofrecido a todos los reps de GPI',
	           correct('Recibire entrenamiento de apoyo cuando vea que lo necesito, o cuando el equipo de Asesoramiento y de Entrenamiento lo sugiera para ayudarme a superar alguna debilidad identificada')],
     lesson: '2,2'},

    {questionHTML: 'Respecto a el asesoramiento de las ciudades:',
     choices: ['Si yo no estoy muy seguro/a sobre como realizar el asesoramiento de las ciudades, pedire al gerente de apoyo del pais que lo haga.',
	       correct('Si yo no estoy muy seguro/a de como hacer el asesoramiento de las ciudades, le pedire al equipo de asesoramiento que me de un entenamiento sobre ello'),
		       'Si yo no estoy segura/o de como hacer el asesoramiento de las ciudades, lo hare de todos modos, porque es muy importante que el asesoramiento a las ciudades se realice',
		       'Si no estoy muy seguro/a sobre como hacer el asesoramiento a las ciudades, preguntare al enlace de ciudad porque ellos conocen todas las actividades en el area'],
     lesson: '2.1'},
   ],

  assessmentName: 'a2course', // unique name submitted along with all of the answers
  checkAnswers: true        // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

