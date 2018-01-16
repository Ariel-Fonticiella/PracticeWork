var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1;
  return num;
}

do {
  guess = prompt("Guess a number between 1  and 10.");
  guessCount += 1;
  if ( parseInt(guess) === randomNumber ) {
    correctGuess = true;
  }
} while ( ! correctGuess );

  document.write("<h1>You guessed the number! </h1>");
  document.write("<p> It only took you " + guessCount + " tries till you got the correct number ('" + randomNumber + "').</p>");
