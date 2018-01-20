//  These square brackets represent what's called an array literal
//              |
var playlist = [ ];
// In this case its an empty array literal that has nothing in it.

// Here, we add an item to the end of the array with the PUSH() METHOD
playlist.push('I Did It My Way');

// The PUSH() METHOD can accept multiple arguments, each argument is one item
// that is added to the array.
playlist.push('Gimmie The Loot', 'We Got The Jazz', 'The Story Of O.J.');

// Here, we use a PRINTLIST() FUNCTION. This function is in js/helper.js. It
// takes an array as an argument and prints it out as an ordered list in HTML
printList( playlist );
