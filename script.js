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


