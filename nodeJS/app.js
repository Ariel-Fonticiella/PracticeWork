var greet = require('./greet');
// the require function will return modules.exports on greet.js.
// if it can't find a greet.js file, it will look for a folder called greet and
// look for an index.js file to return.

greet.english();
greet.spansih();
// Now you can call 'greet()' because you have your own variable for greet that is set equal to the results of 'require'.
