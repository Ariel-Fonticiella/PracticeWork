var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

// responding to URLs
// this will respond to an HTTP request where the method or verb is GET. It will also, then, map to a particular URL.
// '/' essentially, will be the home page, and we give it a callback function.
app.get('/', function(req, res){
  // HTTP request comes in, this is the URL: '/', AND it's a GET method '.get(...)'. It's a GET verb, in the HTTP request, and then the callback function will fire and it will give us a request('req') and a response('res').
  res.send('<html><head></head><body><h1>Hello World!</h1></body></html>');
});

app.get('/api', function(req, res) {
    res.json({ firstname: 'Ariel', lastname: 'Fonticiella' });
});

app.listen(port);
