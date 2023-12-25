var mongoose = require('mongoose');
var CountrySchema = mongoose.Schema(
   {
    country: String
   });
var CountryModel = mongoose.model('countrys', CountrySchema);
module.exports = CountryModel;