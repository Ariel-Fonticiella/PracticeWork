/************
A web server in node that can get a request from the browser and  give a response back.
************/

// use require function and get the core HTTP module.
var http = require('http');

// use require and get the file module ('fs');
var fs = require('fs');

// .createServer is a method that is available that creates a new server object. And this call to this function takes a callback function. The callback is an EventEmitter so that when the server-object Emits a particular event, this function will be called. That callback will be executed when a request happens.
http.createServer(function(req, res) {

  // Tell the browser, specify in the http response that this is going to be HTML so the browser will do the work of rendering the HTML properly.
  res.writeHead(200,  { 'Content-Type': 'text/html' });

  // Then you need to get the contents of the file. So we do a synchronous call, readFileSync(directory name + '/index.htm'); that will give us the full path to the htm file and var html will hold the contents.
  var html = fs.readFileSync(__dirname + '/index.htm', 'utf8');
  //                                                     |
  //                                          We specified that we want to
  //                                          decode it into a string by
  //                                          putting utf8

  var message = 'Hello World...';

  // Here we use the replace method on the string to say replace the template '{Message}' with my variable ('message') content's.
  html = html.replace('{Message}', message);

  // Send the contents of the Dynamic Templates as the http response.
  // The request happened and then we took the template and did something programatic to it before sending it back. 
  res.end(html);

}).listen(1337, '127.0.0.1');
