/*
  The Random Number Guessing Game Generates a number between 1 and 10 and gives players two attempts to guess the number. Careful though, the browser is very sarcastic.
*/

// assume the player didn't guess correctly
var correctGuess = false;

// generate random number from 1 to 10
var randomNumber =  Math.floor( Math.random() * 10) + 1;

var guess = prompt("I'm thing of a number between 1 and 10. What is it?");

/* test to see if player is
  1. correct
  2. guessed too high
  3. guessed too low
*/
if ( parseInt(guess) === randomNumber ) {
  correctGuess = true;
}

else if ( parseInt(guess) < randomNumber) {
    alert("Sorry, wrong guess. You're obviously very dumb so i'll let you guess again and even give you a hint. The correct number is greater than " + guess + ".");

    var guess2 = prompt("Alright Steven Hawking.... what's your next wrong guess?");

      if ( parseInt(guess2) === randomNumber ) {
        correctGuess = true;

        alert("I take it back. You're not THAT dumb, just kinda dumb. Good job, you got the number. With help. Of course.");

        document.write("<p> Wow, congrats! You couldn't figure it out without help. How fun this must be for you! You FINALLY got the number!</p>");
      } else {
        alert("Wrong. Even with help you can't figure it out. Dumb Human. The answer was " + randomNumber + ". 'ohh my god i was so close!' ");
      }
} // END guess < randomNumber

else if ( parseInt(guess) > randomNumber) {
    alert("Sorry, wrong guess. You're obviously very dumb so i'll let you guess again and even give you a hint. The correct number is less than " + guess + ".");

    var guess2 = prompt("Alright Steven Hawking.... what's your next wrong guess?");

      if ( parseInt(guess2) === randomNumber ) {
        correctGuess = true;

        alert("I take it back. You're not THAT dumb, just kinda dumb. Good job, you got the number. With help. Of course.");

        document.write("<p> Wow, congrats! You couldn't figure it out without help. How fun this must be for you! You FINALLY got the number!</p>");
      } else {
        alert("Wrong. Even with help you can't figure it out. Dumb Human. The answer was " + randomNumber + ". 'ohh my god i was so close!' ");
      }
} // END guess > randomNumber

// test if player is correct and output response.
if ( correctGuess ) {
  alert("WOW, You got it!");
  document.write("<p> You guessed the number!</p>");
} else {
  document.write("<p> You Are WRONG! Actually, the correct number was " + randomNumber + " not " + guess + ", but nice try.");
}
