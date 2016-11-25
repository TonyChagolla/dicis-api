var Product = require('../models/Product.js');

exports.findAllProducts = function(req, res) {
	console.log('GET All Products');
	Product.find(function(error, productList) {

		if(error){
			res.send(500, error.message);
		}

		res.status(200).jsonp(productList);
	})
};

exports.findById = function(req, res) {
	res.send('findById');
};

exports.addProduct = function(req, res) {
	console.log(req.body);

	var product = new Product({
		name: req.body.name,
		photo: req.body.photo,
		stock: req.body.stock
	});

	product.save(function(error, product) {
		if(error){
			res.send(500, error.message);
		}

		res.status(200).jsonp(productList);
	})
};

exports.updateProduct = function(req, res) {
	res.send('Update Product');
};

exports.deleteProduct = function(req, res) {
	res.send('Delete Product');
};