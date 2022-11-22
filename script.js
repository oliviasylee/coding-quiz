var questionSpot = document.getElementById("question");
var answerList = document.getElementById("answerList");
const quizButton = document.querySelector('#quizButton');
const quiz = document.querySelector('.quiz');
const opener = document.querySelector("#opener");
var counter = 30;
var index = 0;
var score = 0;
var timePen = 10;

// Reference: https://stackoverflow.com/questions/54637148/how-to-add-onclick-event-to-start-timer
quizButton.addEventListener("click", function() {
  startTimer();
  document.getElementById("count").style = "color:black;";
})

var questions = [
  {
    question: "Commonly used data type Do Not include",
    answers: [
      "A. Strings",
      'B. Boolean',
      'C. alerts',
      'D. numbers'
    ],
    correctAnswer: 'C. alerts'
  },
  {
    question: "The condition in an if/else statement is enclosed within",
    answers: [
      'A. quotes',
      'B. Curly brackets',
      'C. parentheses',
      'D. square brackets'
    ],
    correctAnswer: 'C. arentheses'
  }
];

function startTimer() {
  setInterval(function () {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count");
      span.innerHTML = counter;
    }
    if (counter === 0) {
      quizOver()
      clearInterval();
    }
  }, 1000);
  startQuiz(index)
}

function startQuiz(index) {
  quiz.style.display = 'block';
  opener.style.display = "none"
  questionSpot.innerHTML = ""
  answerList.innerHTML = "";
  var userQuestion = questions[index].question;
  var userAnswers = questions[index].answers;
  questionSpot.innerHTML = userQuestion
  userAnswers.forEach(function(i) {
    let listItem = document.createElement("li")
    listItem.innerHTML = i;
    answerList.appendChild(listItem)
    listItem.addEventListener("click", (checkAnswer))
  })
}

function checkAnswer(event) {
  let chosenAnswer = event.target
  if(chosenAnswer.innerHTML === questions[index].correctAnswer) {
    score = score + 1
    console.log("Correct!" + score)
    
  } else {
    score = score - 1
    counter = counter - timePen
    console.log("Wrong" + score)
  }
  index++
  if(score <= 0) {
    score = 0;
  }
  if(index >= questions.length) {
    quizOver()
    console.log("Quiz is over! You got a score of: " + score)
  } else {
    startQuiz(index)
  }
}

function quizOver() {
  questionSpot.innerHTML = "Quiz Over"
  answerList.innerHTML = "You got a score of: " + score;
}
