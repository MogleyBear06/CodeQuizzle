//  Quiz timer
var  quizTime = 60;

//
var timeInterval // make this global 
// player score
var playerScore = 0;

var Highscore = 0

var scoreList =[]

// variable to tracker current question
currentQuestion = 0

var React = 
    {
    question: "What is React used for? ",
    answers: ["Front-end development", "Back-end development", "Making API calls", "none of the above"],
    correctAnswer: "Front-end development"
    
}
var mvc = 
    {
    question: "What does MVC stand for?",
    answers: ["Modular Vehicle Coding", "Model View Controller", "Mongo View Coding", "none of the above"],
    correctAnswer: "Model View Controller"
    
}

var jwt = 
    {
    question: "What is JWT?",
    answers: ["JSON web token", "javascript web token", "jquery web token", "none of the above"],
    correctAnswer: "JSON web token"
    
}

var css = 
    {
    question: "What is CSS?",
    answers: ["cascading style sheet", "constant sheet syling", "connected style sheet", "none of the above"],
    correctAnswer: "cascading style sheet"
    
}

var listQuestions = [
  React,
  mvc,
  jwt,
  css
]

// timer dom element
var timerEl = document.querySelector(".timer")


// page dom elements

var introEl = document.querySelector(".intro")
var quizEl = document.querySelector(".quiz")
var resetHighScoreEl= document.querySelector(".resetBtn")
var resultEl  = document.querySelector(".results")
var scoreEl = document.querySelector(".score")
var QuestionEl = document.querySelector(".question")
var answerOneEl = document.querySelector(".answerOne")
var answerTwoEl = document.querySelector(".answerTwo")
var answerThreeEl = document.querySelector(".answerThree")
var answerFourEl = document.querySelector(".answerFour")
var highScorceListEL = document.querySelector(".high-score-list")
var topEl = document.querySelector(".top")
var rightOrWrongEl = document.querySelector(".rightOrWrong")

// button Doms
var startBtnEl = document.querySelector(".startBtn")
var submitBtnEl = document.querySelector(".submitBtn")
var goBackBtnEl = document.querySelector(".goBackBtn")
var topScoreEl = document.querySelector(".topScore")

var userName = document.querySelector(".userName")

var listScoresEl = document.querySelector(".listScores")

// visibilty set
resultEl.hidden = true
listScoresEl.hidden = true
QuestionEl.hidden = true
answerOneEl.hidden = true
answerTwoEl.hidden = true
answerThreeEl.hidden = true
answerFourEl.hidden = true

// create a timer function to start  the quiz and timer  via a button connected to a event listener  
var timerFunc = function(){
  

    console.log("timer is working")
    // this sets the timer dom to 60
    timerEl.textContent = quizTime;
    

    // this is where the time is decreased
     timeInterval = setInterval(function () {
        // As long as the `quizTime` is greater than 1
        if (quizTime >= 1) {
          // Set the `textContent` of `timerEl` to show the remaining seconds
          timerEl.textContent = quizTime + ' seconds remaining';
          // Decrement `quizTime` by 1
          quizTime--;
        } else if (quizTime === 1) {
          // When `quizTime` is equal to 1, rename to 'second' instead of 'seconds'
          timerEl.textContent = quizTime + ' second remaining';
          timeLeft--;
         
         
        } else {
          // Once `quizTime` gets to 0, set `timerEl` to an empty string
          timerEl.textContent = '';
          // Use `clearInterval()` to stop the timer
          clearInterval(timeInterval);
          // Call the `displayMessage()` function
          quizTime -= 1
          endGame();
          
          ;
        }
      }, 1000);
}

function init() {
    // need to parse array of user score objects
    var storedScoreList = JSON.parse(localStorage.getItem("ScoresList"));
    console.log(storedScoreList)
  
    // assign the parsed array to scoreList array to render later
    if (storedScoreList !== null) {
      scoreList = storedScoreList;
      console.log(scoreList)
    }
    showScore();
  }
  // create a function that iterates over a set of question objects this function should call a function based on the   result.
// Starts the quiz through a set of function calls 
var startQuiz = function(){

    currentQuestion = 0
    quizTime = 60;
    // this hides the intro text one the page displays 
   //starts timer over
    timerFunc();
    resetIntro();
    displayQuestion();
   
  //loops through the list of objects
  }

  var resetIntro = function(){
    console.log("reset ran")
  resultEl.hidden = true
  listScoresEl.hidden = true
  QuestionEl.hidden = true
  answerOneEl.hidden = true
  answerTwoEl.hidden = true
  answerThreeEl.hidden = true
  answerFourEl.hidden = true
  
  }
  // Hidden intro after quiz starts
  var hideIntro = function(){
    console.log("Hide is working")
    introEl.hidden = true
    quizEl.hidden = false
    QuestionEl.hidden = false
    answerOneEl.hidden = false
    answerTwoEl.hidden = false
    answerThreeEl.hidden = false
    answerFourEl.hidden = false
  
  }

  var displayQuestion = function(){

    hideIntro();
  
    console.log(currentQuestion)
    console.log(listQuestions.length)
  
  
    //end the quiz if there are no more question left
    if(currentQuestion == listQuestions.length){
      
      
     endGame();
    }
    else{
  
    // this shows the question options
    QuestionEl.hidden = false
    answerOneEl.hidden = false
    answerTwoEl.hidden = false
    answerThreeEl.hidden = false
    answerFourEl.hidden = false
  
    //reset the answers
    var listAnswer = document.querySelectorAll("#choice")
  
    // renders the question
    QuestionEl.textContent = listQuestions[currentQuestion].question;
  
    //display answer
    for(var i = 0; i < listQuestions[currentQuestion].answers.length; i++){
      listAnswer[i].textContent = listQuestions[currentQuestion].answers[i];
      console.log("the correct answer is " + listQuestions[currentQuestion].correctAnswer)
  
      }
    }
  }