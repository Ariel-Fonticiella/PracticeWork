var greet = require('./greet');
// the require function will return modules.exports on greet.js.

greet();
// Now you can call 'greet()' because you have your own variable for greet that is set equal to the results of 'require'.
