var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', null);
});

router.post('/:action', function(req, res, next){   //it is post not get
	var action = req.params.action

	if (action == 'contact'){        //if (action == 'post'){
		console.log(req.body)     //console.log(params.body)     
	} 
})

router.get('/project/:name', function(req, res, next){
	var name = req.params.name 

	if (name == name) {
        res.render(name, null)		
	}

})

module.exports = router;
