 // quiz begins, no answers correct
var correct = 0;

 // ask questions
var answer1 = prompt("Where am I from?");
if ( answer1.toUpperCase() === "MIAMI" ) {
    correct += 1;
}

var answer2 = prompt("How old am I?");
if ( parseInt(answer2) === 31 ) {
    correct += 1;
}

var answer3 = prompt("What month is my birthday?");
if ( answer3.toUpperCase() === "FEB" ) {
    correct += 1;
}

var answer4 = prompt("What is my dog's name?");
if ( answer4.toUpperCase() === "BAXTER" ) {
    correct += 1;
}

var answer5 = prompt("Where am I now?");
if ( answer5.toUpperCase() === "HOME" ) {
    correct += 1;
}

 // output results
 document.write("<p> You got " + correct + " out of 5 questions correct!</p>");

 // output Rank
 if ( correct === 5 ) {
   document.write("<p><strong> You earned a GOLD MEDAL! <h1>🥇</h1> </strong></p>");
 } else if ( correct >= 3 ) {
   document.write("<p><strong> You earned a SILVER MEDAL! <h1>🥈</h1> </strong></p>");
 } else if ( correct >= 2 ) {
   document.write("<p><strong> You earned a BRONZE MEDAL! <h1>🥉</h1> </strong></p>");
} else  {
  document.write("<p><strong> You earned the POOP AWARD! <h1>💩</h1></strong></p>");
}
