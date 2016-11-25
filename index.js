var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

app.get('/', function(req, res) {
	res.send('Hello World');
});

var server = app.listen(3000, function() {
	console.log('Express server listening in port ' + server.address().port);
});