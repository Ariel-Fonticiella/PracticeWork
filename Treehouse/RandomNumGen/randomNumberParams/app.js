function randomNumber( lower , upper ) {
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

alert ( randomNumber( 40, 90 ) );
