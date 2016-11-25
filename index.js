var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var productsController = require('./controllers/productsController.js');

var app = express();
var products = express.Router();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use('/api', products);

app.get('/', function(req, res) {
	res.send('Hello World');
});

products.route('/products')
 .get(productsController.findAllProducts)
 .post(productsController.addProduct);

products.route('/products/:id')
 .get(productsController.findById)
 .put(productsController.updateProduct)
 .delete(productsController.deleteProduct);

var server = app.listen(3000, function() {
	console.log('Express server listening in port ' + server.address().port);
});