var express = require('express');
var router = express.Router();
var ColorModels = require('../models/ColorModels');
var ToysModel = require('../models/ToysModel');

router.get('/', async (req, res) => {
   var colors = await ColorModels.find({});
   res.render('color/index', { colors });
})

router.get('/add', (req, res) => {
   res.render('color/add');
})

router.post('/add', async (req, res) => {
   var color = req.body;
   await ColorModels.create(color);
   res.redirect('/color');
})
module.exports = router;