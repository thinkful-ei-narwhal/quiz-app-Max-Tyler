/* eslint-disable strict */
/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Sequentially, what belt is after White Belt?',
      answers: [
        'Red',
        'Orange',
        'Pink',
        'Blue'
      ],
      correctAnswer: 'Blue'
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

//------------------------GENERATE HTML-----------------------------//

// Home Page //

function generateHome(){
  return $('.window').html(`<h1>Welcome to the Jiu Jitsu Quiz!</h1>
          <br />
          <button type="button" id="start">Start!</button>`);
}

// Last Page //
function generateLastPage() {
  return $('.window').html(`<div class="lastPage"><h2>Thanks for playing!</h2><p>Your score was ${(store.score) / 5 * 100}%</div>`);
}

// Questions Div //
function getQuestion() {
  const currentQuestion = store.questions[store.questionNumber].question;
  return currentQuestion;
}
    
// Answers Div //
function getAnswers() {
  let array = [];
  for (let i = 0; i < store.questions[store.questionNumber].answers.length; i++) {
      
    array.push(`<li><input type="radio" name="answerbutton" id="${store.questions[store.questionNumber].answers[i]}">${store.questions[store.questionNumber].answers[i]}</input></li>`);
  }
  return array.join('');
}

// Quiz Page //

function generateQuiz() {
  return $('.window').html(`<div class="mainQuizDiv">
    <div class="question">${getQuestion()}</div>
    <div class="answer"><ul>${getAnswers()}</ul></div>
    <div class="buttonDiv"><button type="button" name="submit" id="submit">Submit</input></div>`);
}

// Header //
function generateHeader(){
  return $('header').html(`<div class="quizHeader"><h2>Test Your BJJ Knowledge</h2>
    <div class="counter">Question: ${store.questionNumber + 1} out of 5</div>
    </div>
    <div class="score">Score: ${(store.score) / 5 * 100}%</div>`);
}

// Feedback Positive //
function generateFeedbackPositive() {
  return `<div class="pfeedback"><p>Correct!</p></div>`;
}

// Feedback Negative //
function generateFeedbackNegative() {
  return `<div class="nfeedback"><p>Sorry! The correct answer was "${store.questions[store.questionNumber].correctAnswer}."</p></div>`;
}

// Next Button Insert //
//replace Submit with Next button
function generateNextButton() {
  return `<div class="buttonDiv"><button type="button" id ="next">Next</button></div>
      </div>`;
}

function generateTryAgain() {
  return $('.lastPage').append('<button type="button" id="tryAgain">Try Again?</button>');
}

//------------------------PAGE RUN FUNCTIONS-----------------------------//

// *** Each page references one or more "Generate HTML" functions from above *** //

// Home Page //
function homePage() {
  generateHome();
}

// Main Quiz Page //
function mainQuizPage(){
  store.quizStarted = true;
  generateHeader();
  generateQuiz();
}

// Last Page //
function lastPage() {
  //we disable header, then generate the last page elements
  $('header').html('');
  generateLastPage();
  generateTryAgain();
}

function disableButtons() {
  //disables the buttons not selected after user submits
  $('input[name="answerbutton"]').attr('disabled', true);
}

// Next Button //
function next() {
  if (store.questionNumber >= (store.questions.length - 1)) {
    lastPage();
  } else {
    store.questionNumber++;
    mainQuizPage();
  }
  console.log(`Moving on to question ${store.questionNumber + 1}.`);
}

// Feedback //
function feedback() {
  //Appends Feedback Div to the div of the answer that was selected. 
  //Runs either positive or negative feedback depending on if the correctAnswer was selected.
  if (document.querySelector('input:checked').id === store.questions[store.questionNumber].correctAnswer) {
    store.score++;
    $('.answer').append(generateFeedbackPositive());
  }  else {
    $('.answer').append(generateFeedbackNegative());
  }
  disableButtons();
  $('.buttonDiv').html(generateNextButton());
} 

// Try Again //
function tryAgain() {
  $('header').html('');
  store.questionNumber = 0;
  store.score = 0;
  homePage();
}

//------------------------EVENT LISTENERS-----------------------------//

// Main Event Handler //
$(document).ready(function() {
  //Opening function is homePage()
  homePage();
  //Listens for Start button to be clicked
  $('.window').on('click', '#start', function() {
    //if Start is clicked, runs mainQuizPage
    mainQuizPage();
  });
  //if Next is clicked, runs Next function
  $('.window').on('click', '#next', function() {
    next();
  });
  //When answer is clicked, runs feedback
  $('.window').on('click', '#submit', function() {
    feedback();
  });
  $('.window').on('click', '#tryAgain', function() {
    tryAgain();
  });
  $('.window').on('click', 'li', function() {
    $('ul').children('input:radio').prop('checked', false);
    $(this).children('input:radio').prop('checked', true);
    $('ul').children('li').removeClass('highlight');
    $(this).prop('class', 'highlight');
  });
});