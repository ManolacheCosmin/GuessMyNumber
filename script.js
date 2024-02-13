'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // WHEN THERE IS NO IMPUT
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number...';

    // WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You got it right! 🎉';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // WHEN GUESS IS WRONG
  } else if (guess !== secretNumber) {
    // WHEN GUESS IS TOO HIGH
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Try a lower one! ↘️' : 'Try a higher one! ↗️';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game over!!😫';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('input').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
