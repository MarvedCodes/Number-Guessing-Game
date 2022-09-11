'use strict';

/* 
//selecting html elements
console.log(document.querySelector('.message').textContent);
//manipulating
document.querySelector('.message').textContent = 'Correct Number!🎉';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// manipulating
document.querySelector('.guess').value = 23;
//selecting input fields
console.log(document.querySelector('.guess').value);
 */

let secretNumber = Math.trunc(Math.random() * 30) + 1;
let score = 30;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const changeBackground = function (background) {
  document.querySelector('body').style.backgroundColor = background;
};

const changeWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

//check input button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('🛑 No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!🎉');
    displayNumber(secretNumber);
    changeBackground('#60b347');
    changeWidth('30rem');

    //highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    displayMessage(guess < secretNumber ? '📉 Too Low!' : '📈 Too High!');
    if (score > 1) {
      score--;
      displayScore(score);
    } else {
      displayMessage('😭 You lost the game.');
      displayScore(0);
    }
  }
});

// again button
document.querySelector('.again').addEventListener('click', function () {
  score = 30;
  secretNumber = Math.trunc(Math.random() * 30) + 1;
  displayMessage('Start guessing...');
  displayNumber('?');
  displayScore(score);
  changeBackground('#222');
  changeWidth('15rem');
  document.querySelector('.guess').value = '';
});
