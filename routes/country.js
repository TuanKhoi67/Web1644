var express = require('express');
var router = express.Router();
var CountryModels = require('../models/CountryModels');
var ToysModel = require('../models/ToysModel');

router.get('/', async (req, res) => {
   var countrys = await CountryModels.find({});
   res.render('country/index', { countrys });
})

router.get('/add', (req, res) => {
   res.render('country/add');
})

router.post('/add', async (req, res) => {
   var country = req.body;
   await CountryModels.create(country);
   res.redirect('/country');
})
module.exports = router;