// require will give you back module.exports, which is the function constructor
var Emitter = require('./emitter');

// I can make my new emitter from the function constructor. So I now have an object that is a new emitter, and it's prototype contains an 'on' and 'emit' method.
var emtr = new Emitter();


emtr.on('greet', function(){
    // This will run whenever the greet event is emitted beacuse i'm adding it to the array.
    console.log('Somewhere, someone said hello.');
});

emtr.on('greet', function() {
    // 'greet' is a property on the object, and i'm adding it to that property, which is an array.
    // So we add another function, another listener, but it's not really a listenter, it's really just a function sitting inside an array.
    console.log('A greeting occurred!');
});

console.log('Hello!');

// we manually emitted the event. And what emit does is just finds the property passed 'greet', and loops through the array and runs all the fucntions in the arry.
emtr.emit('greet');
