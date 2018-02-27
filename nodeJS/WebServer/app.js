/************
A web server in node that can get a request from the browser and  give a response back.
************/

// use require function and get the core HTTP module.
var http = require('http');

// use require and get the file module ('fs');
var fs = require('fs');

// .createServer is a method that is available that creates a new server object. And this call to this function takes a callback function. The callback is an EventEmitter so that when the server-object Emits a particular event, this function will be called. That callback will be executed when a request happens.
http.createServer(function(req, res) {

  // Tell the browser, specify in the http response that this is going to be in JSON. The MIME type for that is 'applicaton/json'.
  res.writeHead(200,  { 'Content-Type': 'application/json' });
  var obj = {
    firstname: 'John',
    lastname: 'Doe'
  };

  // Built into the engine, we could say 'JSON.stringify' and give it an object, so it will take the object and convert it to a string and the string will be formatted in JSON. 
  res.end(JSON.stringify(obj));
}).listen(1337, '127.0.0.1');
