//  These square brackets represent what's called an array literal
//              |
var playlist = [ ];
// In this case its an empty array literal that has nothing in it.

// Here, we add an item to the end of the array with the PUSH() METHOD
playlist.push('I Did It My Way');

// Here, we use a PRINTLIST() FUNCTION. This function is in js/helper.js. It
// takes an array as an argument and prints it out as an ordered list in HTML
printList( playlist );
