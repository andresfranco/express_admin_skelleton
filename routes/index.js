var express = require('express');
var router = express.Router();
var models = require('../models/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// get all todos
router.get('/countries', function(req, res,next) {
	 res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'GET');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  models.Country.findAll({}).then(function(countries) {
    res.json(countries);
  });
});

module.exports = router;