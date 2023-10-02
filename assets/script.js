var preGame = document.getElementById("pre-game");
var game = document.getElementById("game");
var gameEnd = document.getElementById("game-end");
var preGameText = document.getElementById("pre-game-text");
var timeClock = document.getElementsByClassName("timer");
var answerChoices = Array.from(document.getElementsByClassName("choice-text"));



var hiButton = document.getElementById("hi");
var backButton = document.getElementById("back");
var startButton = document.getElementById("start-quiz");
var endQuiz = document.getElementById("end-quiz")

hiButton.addEventListener("click", viewHiScore);
backButton.addEventListener("click", function () {
    document.location.reload();
});

endQuiz.addEventListener("click", function() {
    document.location.reload();
});



startButton.addEventListener("click", startQuiz); 


function countdown(startQuiz) {
    if (timeLeft === 0) {
        clearInterval(timeLeft);
      document.location.reload();
    } else {
      elem.innerHTML = timeLeft + ' seconds remaining';
      timeLeft--;
    }
  };

//function for what is active and in-active when click on the start quiz button
function startQuiz() {
    preGame.setAttribute("class", "is-inactive");
    game.setAttribute("class", "is-active");
    gameEnd.setAttribute("class", "is-inactive");
    hiScore.setAttribute("class", "is-inactive");
    preGameText.setAttribute("class", "is-inactive");
    endQuiz.setAttribute("class", "is-active");
    questions.setAttribute("class", "is-active");
}



function endGame() {
    game.setAttribute("class", "is-inactive");
    gameEnd.setAttribute("class", "is-active");
}

//function for see what is in-active and active when click on highscore button
function viewHiScore() {
    preGame.setAttribute("class", "is-inactive");
    game.setAttribute("class", "is-inactive");
    gameEnd.setAttribute("class", "is-inactive");
    hiScore.setAttribute("class", "is-active");
    preGameText.setAttribute("class", "is-inactive");
}

//var for timer
var timeLeft = 75;
var elem = document.getElementById('Timer');
var timerId = setInterval(countdown, 1000);


//variable for questions in an array
var questions = [
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        choices1: "getElementbyId()",
        choices2: "getElementbyClassName()",
        choices3: "Both A and B",
        choices4: "None of the above",
        answer: "3"
    },
        
    {
        question: "Which function is used to serialize an object into a JSON string in Javascript?",
        choices1: "Parse()",
        choices2: "stringify()",
        choices3: "convert()",
        choices4: "None of the above",
        answer: "2"
    },

    {
        question: "How to stop an interval timer in Javascript?",
        choices1: "clearTimer",
        choices2: "clearInterval",
        choices3: "intervalOver",
        choices4: "None of the above",
        answer: "2"
    },

    {
        question: "How do we write a comment in javascript?",
        choices1: "//",
        choices2: "/* */",
        choices3: "#",
        choices4: "<!-- -->",
        answer: "1"
    },

    {
        question: "Which one of the following is known as the Equality operator, which is used to check whether the two values are equal or not?",
        choices1: "===",
        choices2: "=",
        choices3: "!==",
        choices4: "==",
        answer: "4"
    },

];

var score = 0; 
var questionNum = 0;
var penaltyTimer = 10;


//hiscore in-progress

var hiScore = document.getElementById("hi-score");
let highScoreTag = '';

for (let i = 0; i < localStorage.length; i++) {
    highScoreData = JSON.parse(localStorage.getItem(i+1));
    highScoresTag = highScoresTag.concat('</br><div id="high-scores">'+ highScoreData.initials + " "+"-"+" " + highScoreData.score +'</div>');
    };
    
    hiScore.innerHTML = highScoresTag;