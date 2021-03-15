//Timer settings
var timeEl = document.querySelector(".time");
var secondsLeft = 30;
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }

  }, 1000);
}


var questionIndex = 0;
var startbutton = document.querySelector(".start-button");
var quiz = document.querySelector("#quiz")
function startQuiz() {
  setTime()
  startbutton.setAttribute("class", "hide");
  displayQuestion();
}



var questions = [
  {
    question: "What is JavaScript",
    choices: ["A font style", "A powerful coding language used in many web platforms", "A news publication to read with your morning coffee", "Something aliens created"],
    answer: "A powerful coding language used in many web platforms"
  },
  {
    question: "Which of the following is not a data type",
    choices: ["Boolean", "String", "Input", "Number"],
    answer: "Input"
  },

]

function displayQuestion() {
  quiz.innerHTML = "";
  var currentQuestion = questions[questionIndex]
  var title = document.createElement("h2")
  title.textContent = currentQuestion.question;
  quiz.append(title)

  for (i = 0; i < currentQuestion.choices.length; i++) {
    var button = document.createElement("button")
    button.textContent = currentQuestion.choices[i]
    button.setAttribute("class", "choice")
    button.setAttribute("value", currentQuestion.choices[i])
    button.onclick = confirmAnswer
    quiz.append(button)
  }
}
function confirmAnswer() {
  if (this.value !== questions[questionIndex].answer) {
    secondsLeft -= 5
    timeEl.textContent = secondsLeft
  }
  else {
    secondsLeft += 5
    timeEl.textContent = secondsLeft
  }
  questionIndex++
  displayQuestion()
}


startbutton.onclick = startQuiz;
