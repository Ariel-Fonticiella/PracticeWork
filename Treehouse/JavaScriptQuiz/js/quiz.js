// Created a 2-dimensional array that provides a quesiton and an answer.
var theQuiz = [
    {
      question: "What is Ariel's favorite NFL team?",
      answer:   "Miami Dolphins"
    },
    {
      question: "Professionally, what was Ariel before learning to code?",
      answer:    "Attorney"
    },
    {
      question: "How old is Ariel?",
      answer:   "31"
    },
    {
      question: "Ariel loves to play video games?",
      answer:   "yes"
    },
    {
      question: "What is Ariel's favorite video game growing up?",
      answer:   "BioShock"
    },
    {
      question: "What avenue did Ariel grow up on?",
      answer:   "132"
    }
];

// Created a variable to keep count of the answers the user answers correctly.
var correctAnswerCount = 0;

// Created a variable to store the question the user got correct.
var correct = [];

// Created a variable to keep count of the answers the user answers incorrectly.
var wrongAnswerCount = 0;

// Created a variable to store the question the user got incorrect.
var wrong = [];

// Created a variable to store the questions that were correct/incorrect, to display.
var question = [];

function print(message) {
  var outputDiv = document.getElementById('output');
  // .innerHTML is a PROPERTY you can change just like you can change the value in any variable by simply setting the property.
  outputDiv.innerHTML = message;
}

// To conver these arrays to an HTML list, I create a function that accepts an array as a parameter, then loops through that array constructing the HTML for an ordered list.
  function buildList(arr) {
    // Created a variable that adds to the HTML we want to make. It uses a loop to create an <li></li> tag with w/e is in the array at the specified index position.
  var listHTML = '<ol>';
    for(var i = 0; i < arr.length; i +=1) {
      listHTML += '<li>' + arr[i] + '</li>';
    }
    listHTML += '</ol>';
    return listHTML;
}

// Created a loop to loop through the length of theQuiz array.
for (var i = 0; i < theQuiz.length; i += 1 ) {

      question = theQuiz[i].question;
      answer = theQuiz[i].answer;

      // When the loop is run, create a variable that stores the user's response
      var userAnswer = prompt(question).toLowerCase();

      // Then create a variable that stores the correct answer from the array and sets all responses to be in lowercase. I did this becuase we do not know how the user will type the answer into the prompt, this ensures that if the answer is correct, it will be marked as correct regardless of what case the answer was written in.
      var correctAnswer = theQuiz[i].answer.toLowerCase();

      // Create a conditional statement to test the user's answer with the correct answer.
      if (userAnswer === correctAnswer) {

          // If the condition is true, the user is correct and we add 1 to our correctAnswerCount.
          correctAnswerCount += 1;
          correct.push(question);

          // Alert the user that they are correct and tell them how many quesitons they have gotten correct so far.
          alert("You are correct! The answer was '" + correctAnswer + "!' So far you have gotten " + correctAnswerCount + " question(s) correct out of " + theQuiz.length + "!");

        } else {

          // If the condition is false, the user is incorrect and we add 1 to our incorrectAnswerCount.
          wrongAnswerCount += 1;
          wrong.push(question);

          // Alert the user that they are incorrect, give them the correctAnswer, and tell them how many quesitons they have gotten incorrect so far.
          alert("Sorry! The correct answer was actually '" + correctAnswer + "'. So far you have got " + wrongAnswerCount + " question(s) incorrect.");

      } // else

} // Loop-End

  html = "<h1> There was a total of <strong>" + theQuiz.length + " question(s)</strong> on this test.</h1>";
  html += "<h1> You answered a total of <strong>" + correctAnswerCount + " question(s) correctly:</strong> These are the questions: </h1>";
  html += buildList(correct);

  html += "<h1> And you answered <strong>" + wrongAnswerCount + " question(s) incorrectly</strong>. These are the questions: </h1>";
  html += buildList(wrong);

  print(html);
