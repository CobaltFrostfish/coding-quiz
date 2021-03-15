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
var introText = document.querySelector("#intro");
var quiz = document.querySelector("#quiz");
function startQuiz() {
  setTime()
  startbutton.setAttribute("class", "hide");
  introText.setAttribute("class", "hide");
  displayQuestion();
}



var questions = [
  {
    question: "What is JavaScript?",
    choices: ["A font style", "A powerful coding language used in many web platforms", "A news publication to read with your morning coffee", "Something aliens created"],
    answer: "A powerful coding language used in many web platforms"
  },
  {
    question: "Which of the following is not a data type?",
    choices: ["Boolean", "String", "Input", "Number"],
    answer: "Input"
  },
  {
    question: "What does DOM stand for?",
    choices: ["Dis Obviously Mental", "Drawn Out Material", "Dominate Oriented Matrix", "Document Object Model"],
    answer: "Document Object Model"
  },
  {
    question: "How do you de-bug script?",
    choices: ["Stare the code deep into its soul until the most miniscule problem becoms obvious", "Grab the fly swatter", "BUG BOMB!!!", "Squash it with a large boot"],
    answer: "Stare the code deep into its soul until the most miniscule problem becoms obvious"
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
