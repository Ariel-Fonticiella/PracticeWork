//  These square brackets represent what's called an array literal
//                 |
// var playlist = [ ];
// In this case its an empty array literal that has nothing in it.

// Here, we add an item to the end of the array with the PUSH() METHOD
// playlist.push('I Did It My Way');

// The PUSH() METHOD can accept multiple arguments, each argument is one item
// that is added to the array.
// playlist.push('Gimmie The Loot', 'We Got The Jazz', 'The Story Of O.J.');

// The UNSHIFT() METHOD adds an item to the begining of the array
// playlist.unshift('These Eyes', 'Look Out Weekend', 'Bulls On Parade');

// Here, we use a PRINTLIST() FUNCTION. This function is in js/helper.js. It
// takes an array as an argument and prints it out as an ordered list in HTML
// printList( playlist );
//
// for (var i = 0; i < playlist.length; i += 1) {
//   console.log(playlist[i]);
// }

var playList = [
  'I Did It My Way',
  'Respect',
  'Imagine',
  'Born to Run',
  'Louie Louie',
  'Maybellene'
];

function print(message) {
  document.write(message);
}

// This takes an array of items and prints it out as an ordered list to the page. This function takes an array as a parameter (a variable that holds some value that is passed to the function)
function printList( list ) {
  var listHTML = '<ol>';
  for(var i = 0; i < list.length; i +=1 ) {
    listHTML += '<li>' + list[i] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

printList(playList);
