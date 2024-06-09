'use strict';

// 'SECRET NUMBER' - PART 1:
// The command 'random' gives us a random number between 0 and 1. To obtain random numbers between 1 and 20, you should multiply this command by 20 (* 20) and add the 'Math.trunc' function, which will convert the numbers to whole values (e.g., 2, 14, 18). However, the highest number will be 19.99999, never a full 20. To achieve a result equal to 20, you need to additionally add 1 (+ 1):

let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Set 'SCORE' to the starting level of 20.
let score = 20;
let highscore = 0;

// 'SECRET NUMBER' - PART 2 --> Moved to the place where the player guesses the number.
// document.querySelector('.number').textContent = secretNumber;

// The addEventListener method adds an "action" to a specific element, such as the "Check!" button. Next, we specify what triggers the JavaScript action (in parentheses); in this case, it will be 'click'. Then (using a function), we define what should happen AFTER the click, such as checking the number entered by the user - ('.guess').value.

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input --> If we click 'check!' without entering ANY number, the message '⛔ No number!' will display in the .message area.
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';

    // When player wins --> If we click 'check!' and enter EXACTLY 'SECRET NUMBER', the message '💪 Correct Number!' will display in the .message area.
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      'Correct Answer! 💪 USE CODE: MM24';
    // Displays the Secret Number, BUT ONLY when the player guesses it.
    document.querySelector('.number').textContent = secretNumber;

    // CHANGING BACKGROUND COLOR - when the player wins (IMPORTANT - we write 'body' without a dot before).
    document.querySelector('body').style.backgroundColor = '#ff00ff';
    // CHANGING COLOR OF .number - when the player wins:
    document.querySelector('.number').style.color = '#ff00ff';

    // When player have better highscore then before:
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When gueass is too high --> If we click 'check!' and enter a 'SECRET NUMBER' that is TOO HIGH or TOO LOW, the message '🔺 Too high!' or '🔻 Too low!' will display in the .message area. [SHORTENED VERSION - CODE REFACTORING --> When guess is WRONG]
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // ADDING if (score > 1) / else --> because if we fail to find the correct number within 20 attempts, the system will start deducting points.
      document.querySelector('.message').textContent =
        guess > secretNumber ? '🔺 Too high!' : '🔻 Too low!';
      // ADDING a condition where if the guessed number is too low, it will decrease the 'score' by 1. (Instead of using score = score - 1;, we can simply write score--.)
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '❌ You lost the game!';
      document.querySelector('.message').textContent = 0;
    }
  }
});

// GAME RESET --> ADDING A FUNCTION TO THE 'again' BUTTON so that when pressed, the player can start the game again from the beginning:
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // The 'message' field should display "Start guessing..."
  document.querySelector('.message').textContent = 'Start guessing...';
  // In the 'score' field, there should be "score".
  document.querySelector('.score').textContent = score;
  // In the 'number' field, there should be "?".
  document.querySelector('.number').textContent = '?';
  // The 'guess' field should be empty.
  document.querySelector('.guess').value = '';

  //Restoring the dark background color and resetting the 'score' field size when the player presses 'again'.
  // CHANGING BACKGROUND COLOR (IMPORTANT - we write 'body' without a dot before).
  document.querySelector('body').style.backgroundColor = '#333';
  // CHANGING WIDTH OF .number:
  document.querySelector('.number').style.width = '18rem';
});
