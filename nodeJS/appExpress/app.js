var express = require('express');

var app = express();

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

// MiddleWare
app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log(`Request Url: ${req.url}`);
	next();
});

// Both of these lines are adding onto the 'var app', because it's passed by reference.
htmlController(app);
apiController(app);

app.listen(port);
