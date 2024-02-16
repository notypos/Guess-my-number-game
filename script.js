'use strict';
/*
// DOM manipulation
// gets the class .message then reads the text content
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number!';
console.log(document.querySelector('.message').textContent);

// changing the secret number and score
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// Changing text box input value
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// Define secret number outside of event listener so it stays the same
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; // state variable
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Event listener for the click of "Check!" button and the event handler function
document.querySelector('.check').addEventListener('click', function () {
  // All of this is the Event handler

  // Guess is the querySelector selecting the textbox value
  const guess = Number(document.querySelector('.guess').value);

  // if the guess ... then textContent changes... based on const guess
  // When there is no input
  if (!guess) {
    displayMessage('⛔No number!');

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉Correct Nubmer!');
    score++; // increase state of score
    document.querySelector('.score').textContent = score; // update score
    document.querySelector('body').style.backgroundColor = '#60b347'; // update background color
    document.querySelector('.number').style.width = '30rem'; // update number style width
    // Update the highscore if the score is higher than it change it = score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is not secret number
  } else if (guess !== secretNumber) {
    if (score > 0) {
      // nested// if score above 0 then continue
      displayMessage(guess > secretNumber ? '📈Too High!' : '📉Too low!');
      score--; // decrease state of score
      document.querySelector('.score').textContent = score;
    } else {
      // otherwise socre is 0  and you've lost the game
      displayMessage('You Lose🙉');
    }
  }

  // End of event handler
});

// Again Button:
// Restore initial values of the score and secretNumber
// Restore initial conditions of message, number, score and guess input field
// Also restore original width and background color
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
