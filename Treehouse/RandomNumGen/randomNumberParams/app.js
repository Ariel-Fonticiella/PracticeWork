function randomNumber( lower , upper ) {
  if ( isNaN(lower) || isNaN(upper) ) {
    throw new Error ("Please provide a valid number between 0 - 9");
  }
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

console.log ( randomNumber (20 , 50) );
