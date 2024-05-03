


document.addEventListener('DOMContentLoaded', () => {
    fetchQuizData()
        .then(() => showEnterNameView())
        .catch(error => console.error('Error fetching quiz data:', error));
});

// Method for fetching question


var positiveMessage = ["Well done!", "Smarty!", "Fantastic!", "Wonderful!"];
var isPositiveMessageOpen = false;
var studentName;
var score = 0;
var questionIndex = 0;
var elapsedTime = 0;
var stopWatch;
var activeQuiz;

// Function to start the quiz
function start() { 
    var userName = document.querySelector("#studentName")
    studentName - userName.value;
    var quizChosen = document.querySelector("#chooseQuiz").value;
    var quizTaken = quizChosen.value;

    if (!studentName) {
        return alert("Please enter your name before starting the quiz");
    }

    activeQuiz = quizzes[quizTaken];
}

// Function to check answers

// Function to render view

// Function to notify user if answer is correct or incorrect

// Function to load the start quiz view

// Function to go to the next question


// Function for the scoreboard


// Function to view the final result