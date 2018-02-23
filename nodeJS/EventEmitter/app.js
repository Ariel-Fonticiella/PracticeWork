/*******************************************************************************Using the internal Node Event Emitter is simply a really clean way to structure responding to things that happen in your app. You will say, manually, that the 'events' have happened after they are run, using the 'emit' method on the 'events' object (emtr.emit("greet")). Once that is done, all the functions that you have set up on the events object's '.on method' will be executed.
                                         |
                       Emitter.prototype.on(type, listenter){...}
*******************************************************************************/

// 'require' will give you back 'module.exports', which will be the the function constructor on 'emitter.js'.
// originally we had: 'var Emitter = require('./emitter');'

var Emitter = require('events'); // Here we are using Node's event emitter.
  // you don't need './events' because it's an internal core JS module.

// I can make my new emitter from the function constructor. So I now have an object that is a new emitter, and it's prototype contains an 'on' and 'emit' method.

var eventConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function(){
    // This will run whenever the greet event is emitted beacuse i'm adding it to the array.
    console.log('Somewhere, someone said hello.');
});

emtr.on(eventConfig.GREET, function() {
    // 'greet' is a property on the object, and i'm adding it to that property, which is an array.
    // So we add another function, another listener, but it's not really a listenter, it's really just a function sitting inside an array.
    console.log('A greeting occurred!');
});

console.log('Hello!');

// we manually emitted the event. And what emit does is just finds the property passed 'greet', and loops through the array and runs all the fucntions in the arry.
emtr.emit(eventConfig.GREET);
