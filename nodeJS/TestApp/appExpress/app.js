var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var jasonParser = bodyParser.json();

// MiddleWare
app.use('/assets', express.static(__dirname + '/public'));

// by default, the Express Framework will look for the static files (the views) inside a folder called 'views'. views is just your user interface, your UI. the second parameter 'ejs' is the extension we give the files in the view folder.
app.set('view engine', 'ejs');

// 'app.use' just matches a route and then takes a function. When you invoke it it returns a function which then handles the request and the response, what's inbetween there, and a third parameter, that we'll call 'next'.
app.use('/', function (req, res, next) {
	console.log(`Request Url: ${req.url}`);
	next();
});

// this will respond to an HTTP request where the method or verb is GET. It will also, then, map to a particular URL.
// '/' essentially, will be the home page, and we give it a callback function.
app.get('/', function(req, res) {
  // Express will go to wherever you've said the views are, and by default it's in the views folder, and then it will look for a file of the name it was given, 'index'.
  res.render('index');
  // this will render the index. It will go out, get the contents of the file, process it, and render it.
});

// here we are passing a variable via the route. Here, 'id' is your variable name and the colon ':' tells the JavaScript code in Express that 'id' could be anything. So if the URL that is requested in the HTTP request is '/person/something', the .get method's callback function will be run.
app.get('/person/:id', function(req, res) {
	res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
});

//===POST===
app.post('/person', urlencodedParser, function(req, res) {
		res.send('Thank You!');
		console.log(req.body.firstname);
		console.log(req.body.lastname);
});

//===RESTFUL API===
app.get('/api/person/:id', function(req, res) {
	// get that data from database
	res.json({ firstname: 'Ariel', lastname: 'Fonticiella' });
});

app.post('/api/person', jasonParser, function(req, res){
		// save to the database
});

app.delete('/api/person/:id', function(req, res){
		// delete from the database
});
//===RESTFUL API END===

app.listen(port);
