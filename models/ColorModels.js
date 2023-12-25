var mongoose = require('mongoose');
var ColorSchema = mongoose.Schema(
   {
      color: String,
   });
var ColorModel = mongoose.model('colors', ColorSchema);
module.exports = ColorModel;