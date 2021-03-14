var startButton = document.querySelector("#start-button");
var resetButton = document.querySelector("#reset-button");
var answerButton = document.querySelector('#answer-button');


var timer;
var timerCount = 30;

function startTimer() {
      timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
    ​
        if (timerCount === 0) {
          timerElement.textContent = '';
          $('#reset-button').show();
          gameOver();
        }
    ​
        if (timerCount === 0) {
          clearInterval(timer);
        }
      }, 1000);
    }
    