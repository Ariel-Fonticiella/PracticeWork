function makeGreeting(language) {

    return function(firstname, lastname) {

      if (language === 'en') {
          console.log('Hello ' + firstname + ' ' + lastname);
      }

      if (language === 'es') {
          console.log('Hola ' + firstname + ' ' + lastname);
      }

    }; // function expression

} // makeGreeting(language)

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('Ariel', 'Fonticiella');
greetSpanish('Armando', 'Fonticiella');
