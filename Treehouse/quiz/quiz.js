// var answer = prompt("Where am I from?");
//
// if ( answer.toUpperCase() === "MIAMI" ) {
//   document.write("<p> That's right!</p>");
// } else {
//   document.write("<p> Nope! Try again!</p>");
// }


var correctGuess = false;
var randomNumber =  Math.floor( Math.random() * 10) + 1;
var guess = prompt("I'm thing of a number between 1 and 10. What is it?");


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
        alert("Wrong. Even with help you can't figure it out. Dumb Human. The answer was " + randomNumber + ". 'ohh my god i was so close!' ")
      }

}
else if ( parseInt(guess) > randomNumber) {
    alert("Sorry, wrong guess. You're obviously very dumb so i'll let you guess again and even give you a hint. The correct number is less than " + guess + ".");

    var guess2 = prompt("Alright Steven Hawking.... what's your next wrong guess?");

      if ( parseInt(guess2) === randomNumber ) {
        correctGuess = true;

        alert("I take it back. You're not THAT dumb, just kinda dumb. Good job, you got the number. With help. Of course.");

        document.write("<p> Wow, congrats! You couldn't figure it out without help. How fun this must be for you! You FINALLY got the number!</p>");
      } else {
        alert("Wrong. Even with help you can't figure it out. Dumb Human. The answer was " + randomNumber + ". 'ohh my god i was so close!' ")
      }
}

if ( correctGuess ) {
  alert("WOW, You got it!");
  document.write("<p> You guessed the number!</p>");
} else {
  document.write("<p> You Are WRONG! Actually, the correct number was " + randomNumber + " not " + guess + ", but nice try.");
}
