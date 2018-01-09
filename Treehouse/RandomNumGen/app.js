var userNum1 = prompt("Please provide a starting number:");

var bottomNum = parseInt(userNum1);

var userNum = prompt("Please provide a number:");

var topNum = parseInt(userNum);

var randomNum = Math.floor( Math.random() * (topNum - bottomNum + 1)) + bottomNum;

var message = "<p>" + randomNum + " is a number between " + bottomNum + " and " + topNum + ".</p>";

document.write(message);
