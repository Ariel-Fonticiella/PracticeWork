/************
A web server in node that can get a request from the browser and  give a response back.
************/

// use require function and get the core HTTP module.
var http = require('http');

// use require and get the file module ('fs');
var fs = require('fs');

// .createServer is a method that is available that creates a new server object. And this call to this function takes a callback function. The callback is an EventEmitter so that when the server-object Emits a particular event, this function will be called. That callback will be executed when a request happens.
http.createServer(function(req, res) {

  // We use an 'if ... else if ... else' condition, because even if we are still streaming the contents out as a result, it will still run the other lines of code including the 404 at the end and we would always end up with 404s. Using this condition makes sure that they only run under each specific circumstance.
  
  // if the request is just a slash '/', and we will pipe to the response a fs.createReadStream(...)
  if (req.url === '/') {
      // the HTTP request came in, the URL was just slash '/', meaning there was nothing at the end of our 'localhost:1337', and we returned the contents, we streamed the contents, of the HTM file.
      fs.createReadStream(__dirname + '/index.htm').pipe(res);
  }

  // if the requires is '/api' it will instead give us JSON. So if we go to '/api' in the HTTP request, we will get back the data in JSON format.
  else if (req.url === '/api'){
    // Tell the browser, specify in the http response that this is going to be in JSON. The MIME type for that is 'applicaton/json'.
    res.writeHead(200,  { 'Content-Type': 'application/json' });
    var obj = {
      firstname: 'John',
      lastname: 'Doe'
    };

    // Built into the engine, we could say 'JSON.stringify' and give it an object, so it will take the object and convert it to a string and the string will be formatted in JSON.
    res.end(JSON.stringify(obj));
  }
  else {
  // if the HTTP requrest doesn't exist, we will respond with a Status of 404 and respond with nothing to the browser.
  res.writeHead(404);
  res.end();
  }

}).listen(1337, '127.0.0.1');
