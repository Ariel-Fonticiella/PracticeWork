// Created a 2-dimensional array that provides quesitons and answers.
var theQuiz = [
    ["What is Ariel's favorite NFL team?", "Miami Dolphins"],
    ["Professionally, what was Ariel before learning to code?", "Attorney"],
    ["How old is Ariel?", "31"],
    ["Ariel loves to play video games, true or false?", "true"],
    ["What is Ariel's favorite video game growing up?", "BioShock"],
    ["What avenue did Ariel grow up on?", "132"]
];

var html;

// Created a variable to keep count of the answers the user answers correctly
var correctAnswerCount = 0;

// Created a variable to keep count of the answers the user answers incorrectly
var wrongAnswerCount = 0;

// Created a loop to loop through the length of theQuiz array.
for (var i = 0; i < theQuiz.length; i += 1 ) {

      // When the loop is run, create a variable that stores the user's response
      var userAnswer = prompt(theQuiz[i][0]).toLowerCase();

      // Then create a variable that stores the correct answer from the array and sets all responses to be in lowercase. I did this becuase we do not know how the user will type the answer into the prompt, this ensures that if the answer is correct, it will be marked as correct regardless of what case the answer was written in.
      var correctAnswer = theQuiz[i][1].toLowerCase();

      // Create a conditional statement to test the user's answer with the correct answer.
      if (userAnswer === correctAnswer) {

          // If the condition is true, the user is correct and we add 1 to our correctAnswerCount.
          correctAnswerCount += 1;

          // Alert the user that they are correct and tell them how many quesitons they have gotten correct so far.
          alert("You are correct! The answer was '" + correctAnswer + "!' So far you have gotten " + correctAnswerCount + " question(s) correct out of " + theQuiz.length + "!");

        } else {

          // If the condition is false, the user is incorrect and we add 1 to our incorrectAnswerCount.
          wrongAnswerCount += 1;

          // Alert the user that they are incorrect, give them the correctAnswer, and tell them how many quesitons they have gotten incorrect so far.
          alert("Sorry! The correct answer was actually '" + correctAnswer + "'. So far you have got " + wrongAnswerCount + " question(s) incorrect.");

      } // else

} // Loop-End

function print(message) {
  var outputDiv = document.getElementById('output');
  // .innerHTML is a PROPERTY you can change just like you can change the value in any variable by simply setting the property.
  outputDiv.innerHTML = message;
}

html = [
    "<h1> There was a total of <strong>" + theQuiz.length + " question(s)</strong> on this test. </h1> <br /> <h1> Of those "+ theQuiz.length +" quesitons, you answered a total of <strong>" + correctAnswerCount + " question(s) correctly</strong>. </h1> <br /> <h2> And you answered <strong>" + wrongAnswerCount + " question(s) incorrectly</strong>. </h2>"
  ];

  print(html);
