var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
 var productSchema = new Schema({
   name: String,
   photo: String,
   stock: Number
 });
module.exports = mongoose.model('Product', productSchema);