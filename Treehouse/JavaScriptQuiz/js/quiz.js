var theQuiz = [
    ["What is Ariel's favorite NFL team?", "Miami Dolphins"],
    ["Professionally, what was Ariel before learning to code?", "Attorney"],
    ["Ariel loves to play video games, true or false?", "true"]
];

var correctAnswerCount = 0;

var wrongAnswerCount = 0;

for (var i = 0; i < theQuiz.length; i += 1 ) {

      var userAnswer = prompt(theQuiz[i][0]);

      var correctAnswer = theQuiz[i][1].toLowerCase();

      if (userAnswer === correctAnswer) {

          correctAnswerCount += 1;

          alert("You are correct! The answer was " + correctAnswer + "! So far you have gotten " + correctAnswerCount + " question(s) correct!");

        } else {

          wrongAnswerCount += 1;

          alert("You are wrong. It was " + correctAnswer + ". You got " + wrongAnswerCount + " questions wrong.");
      }

  } // Loop-End






    function print(message) {
      document.write(message);
    }
