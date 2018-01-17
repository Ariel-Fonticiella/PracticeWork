
/*===========================================================================*/

// 1) First the JS interpreter reads through the program it memorizes the function and reads for any syntax errors.
// function randomNumber(upper) {
//   return Math.floor( Math.random() * upper ) + 1;
// }

// 2) Then it starts to run the program. It creates a variable and stores the value 0 in it.
// var counter = 0;

// 3) Then it looks at the while loop. It test the condition. At this point it holds a value of 0. The loop condition asks if the counter is less than 10. Yes, 0 is less than 10, so the JS interpreter enteres the code block and does a few things.

// while  ( counter < 10 ) {
// First it generates a new random number from 1 to 6.
// var randNum = randomNumber(6);

// It then writes that random number and a space to the page. We add a blank space after the randomNumber so that the numbers are separate when printed to the page.
// document.write(randNum + ' ');

// It then adds one to the counter variable, which now hold the value of 1. Then the loop goes back to while condition and checks it again until the condition is no longer true. When the counter variable is equal to 10, the condition is no longer true because 10 is not less than 10. The loop ends and the program continues.
//   counter += 1;
// }
