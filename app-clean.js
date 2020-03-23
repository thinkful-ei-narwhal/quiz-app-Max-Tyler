/* eslint-disable strict */
//------------------------GENERATE HTML-----------------------------//

// Home Page //

function generateHome(){
  return $('.window').html(`<h1>Welcome to the Jiu Jitsu Quiz!</h1>
          <br />
          <button type="button" id="start">Start!</button>`);
}

// Last Page //

function generateLastPage() {
    return $(.window).html(`<div class="lastPage"><h2>Thank you for completing the quiz!</h2>`)
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
      
    array.push(`<li><input type="radio">${store.questions[store.questionNumber].answers[i]}</input></li>`);
  }
  return array.join('');
}

// Quiz Page //

function generateQuiz() {
  return $('.window').html(`<div class="mainQuizDiv">
    <div class="question">${getQuestion()}</div>
    <div class="answer"><ul>${getAnswers()}</ul></div>
    <div class=""</div>`);
}

// Header //
function generateHeader(){
  return $('header').html(`<div class="quizHeader"><h2>Quiz Name</h2>
    <div class="counter">Question: ${store.questionNumber + 1}</div>
    </div>
    <div class="score">Score: ${store.score}</div>
    <div class="nextDiv"><button type="button" id ="next">Next</button></div>
      </div>`);
}

// Feedback Positive //

// Feedback Negative //

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
    generateLastPage();
  }

// Next Button //
function next() {
    if (store.questionNumber >= store.questions.length) {
      lastPage();
    } else {
      store.questionNumber++;
      mainQuizPage();
    }
  }

// Feedback //
function feedback() {
    //Appends Feedback Div to the div of the answer that was selected. 
    //Runs either positive or negative feedback depending on if the correctAnswer was selected.  
}

//------------------------EVENT LISTENERS-----------------------------//

// Feedback //
function feedback() {
    //Appends Feedback Div to the div of the answer that was selected. 
    //Runs either positive or negative feedback depending on if the correctAnswer was selected.  
}

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
    $('header').on('click', '#next', function() {
      next();
    });
        //When answer is clicked, runs feedback
    //$('.answer').on('click')
  });