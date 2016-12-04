var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', null);
});

router.post('/:action', function(req, res, next){
	var action = req.params.action

	if (action == 'contact'){        //if (action == 'post'){
		console.log(req.body)     //console.log(params.body)     
	} 
})

module.exports = router;
