var mongoose = require('mongoose');
var CompanySchema = mongoose.Schema({
   name: String,
   address: String,
   image: String,
});
//Relationship : Companys (many) - brands (one)

var CompanysModel = mongoose.model('companys', CompanySchema); // 'Companys' : collection
module.exports = CompanysModel;