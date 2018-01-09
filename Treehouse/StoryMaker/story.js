var questions = 6;
var questionsLeft = ' [' + questions + ' questions left]';

var character = prompt("Please provide a 'Character' for your story:" + questionsLeft);

var setting = prompt("Please provide a 'Setting' where your story takes place:");

var placeToTravel = prompt("Please provide a 'Place to Travel' for your story:");

var problem = prompt("Please provide a 'Problem' for your story:");

var adjective = prompt("Please provide a 'Adjective' for your story:");

var verb = prompt("Please provide a 'Verb' for your story:");

document.write("Once upon a time, " + character + " lived in an old and smelly " + setting +". He/she wanted to go somewhere exciting, so he/she planned a trip to " + placeToTravel +". But then, " + problem + ". " + character + " was very " + adjective + " and " + adjective + ". He/she had to do something! So he/she " + verb + ". After this, " + character + " lived happily ever after.");
