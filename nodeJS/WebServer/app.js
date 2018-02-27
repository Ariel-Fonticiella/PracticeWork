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

  // Then we get a readable stream by using the method .createReadStream. Remember streams are just a wrapper around the idea of dealing with data a chunk at a time, but I could send the chunk to any writeable stream, and we already have writeable stream available to us, the 'res' that was passed to us when the event listener given as a callback was invoked.
  fs.createReadStream(__dirname + '/index.htm').pipe(res);
    // here, we are saying: connect a readable file stream (__dirname + '/index.htm') and pipe it (.pipe(res)) to the response stream ('res')

    // So every chunk of data read from the file, will be buffered and then piped out to the HTTP response stream. So rather than pulling the entire file into a buffer and THEN sending it, we will send it a chunk at a time.
    // Our buffer stays small, and that means our application will be faster, more responsive, more performant.


}).listen(1337, '127.0.0.1');
