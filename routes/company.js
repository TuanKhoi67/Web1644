var express = require('express');
var router = express.Router();
var CompanyModels = require('../models/CompanyModels');


router.get('/', async (req, res) => {
   var companys = await CompanyModels.find({});
   res.render('company/index', { companys });
})

router.get('/add', (req, res) => {
   res.render('company/add');
})

router.post('/add', async (req, res) => {
   var company = req.body;
   await CompanyModels.create(company);
   res.redirect('/company');
})
module.exports = router;