/* eslint-disable strict */


/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Sequentially, what belt is after white belt?',
      answers: [
        'red',
        'orange',
        'pink',
        'blue'
      ],
      correctAnswer: 'blue'
    },
    {
      question: 'What year did Royce Gracie debut in UFC?',
      answers: [
        '1998',
        '2015',
        '2019',
        '2005'
      ],
      correctAnswer: '1998'
    },
    {
      question: 'What takedown is illegal in brazilian jiu jitsu?',
      answers: [
        'Kani-Basami',
        'Single Leg',
        'Berimbolo',
        'Ankle Pick'
      ],
      correctAnswer: 'Kani-Basami'
    },
    {
      question: 'What\'s the most dangerous leglock?',
      answers: [
        'Kneebar',
        'Straight-ankle lock',
        'Reverse Ashi-Garami',
        'Heel Hook'
      ],
      correctAnswer: 'Heel Hook'
    },
    {
      question: 'Which of these is the name of an important hip movement?',
      answers: [
        'Shrimp',
        'Lettuce',
        'Kung Pao Chicken',
        'Hump'
      ],
      correctAnswer: 'Shrimp'
    },
    
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};


/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

function generateHome(){
  return `<div class='home'>`
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
function feedback(){
//Displays a screen BASED on user clicking buttons.
}

function ()

function questions(){
  //Start at question 1
  let currentQuestion = store.questions[0];
  //Displays the question
  console.log(currentQuestion);
  //Display all the answers
  let firstAnswer = store.questions[0].answers[0];
  for(let i = 0; i <= firstAnswer.length; i++){
    let firstAnswer = store.questions[0].answers[i];
    console.log(firstAnswer);
  }
  //needs a submit button after selecting an answer
}
/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
function userSubmits(){
  //Needs a button for the user to smash after selecting an option. 
  //If the user selects no option and attempts to click next, prevent them from moving to the next question. 

}

function (){
  
}


questions();