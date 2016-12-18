var express = require('express');
var router = express.Router();
var sendgrid = require('sendgrid')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
  	  confirmation: 'success',
  	  message: 'sendgrid works'

  });


});

module.exports = router;



// router.get()