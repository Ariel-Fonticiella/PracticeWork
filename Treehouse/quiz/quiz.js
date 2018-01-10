// var answer = prompt("Where am I from?");
//
// if ( answer.toUpperCase() === "MIAMI" ) {
//   document.write("<p> That's right!</p>");
// } else {
//   document.write("<p> Nope! Try again!</p>");
// }


var randomNumber =  Math.floor( Math.random() * 10) + 1;
var guess = prompt("I'm thing of a number between 1 and 10. What is it?");



if ( parseInt(guess) === randomNumber ) {
  alert("You are Correct!");
} else {
  alert("You are WRONGGGGGGGG!!!!!! The correct number was acually " + randomNumber + ".");
}
