var express = require('express');
var router = express.Router();
var ToysModel = require('../models/ToysModel');
var BrandModels = require('../models/BrandModels');
var ColorModels = require('../models/ColorModels');
var CountryModels = require('../models/CountryModels');

//URL: localhost:3001/toy
router.get('/', async (req, res) => {
   var toys = await ToysModel.find({}).populate('brand');
   res.render('toy/index', { toys });
})

router.get('/add', async (req, res) => {
   var brands = await BrandModels.find({});
   var colors = await ColorModels.find({});
   var countrys = await CountryModels.find({});
   res.render('toy/add', { brands, colors, countrys });
})

router.post('/add', async (req, res) => {
   var toy = req.body;
   await ToysModel.create(toy);
   res.redirect('/toys');
})

router.get('/delete/:id', async (req, res) => {
   await ToysModel.findByIdAndDelete(req.params.id);
   res.redirect('/toys');
})

router.get('/edit/:id', async (req, res) => {
   var id = req.params.id;
   var toy = await ToysModel.findById(id);
   var brands = await BrandModels.find({});
   var colors = await ColorModels.find({});
   var countrys = await CountryModels.find({});
   res.render('toy/edit', { toy, brands, colors, countrys });
})

router.post('/edit/:id', async (req, res) => {
   var id = req.params.id;
   var toy = req.body;
   try {
      await ToysModel.findByIdAndUpdate(id, toy);
      console.log('update succeed !');
   } catch (err) {
      console.log('update failed. Error: ' + err);
   }
   res.redirect('/toys');
})

router.post('/search', async (req, res) => {
   var keyword = req.body.keyword;
   //SQL: SELECT * FROM toys WHERE model LIKE '%keyword%'
   var toys = await ToysModel.find({ name: new RegExp(keyword, "i") }).populate('brand');
   res.render('toy/index', { toys })
})

module.exports = router;