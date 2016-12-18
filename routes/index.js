var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', null);
});

router.get('/confirmation', function(req, res, next){
	res.render('confirmation', null)
})

router.post('/:action', function(req, res, next){   //it is post not get
	var action = req.params.action

	if (action == 'contact'){        //if (action == 'post'){    NOT WORK 
		console.log(req.body)     //console.log(params.body)    NOT WORK
		res.redirect('/confirmation')      //res.redirect('/confirmation', null) NOT WORK  
	} 
})



router.get('/project/:name', function(req, res, next){
    var pages = ['perc', 'velocity360']
    
	var name = req.params.name 

	if (pages.indexOf(name) == -1){
		res.render('error', {message: "Page does not exist, check your spelling"})
        
        return
	}

	if (name == name) {
        res.render(name, null)		
	}

})

module.exports = router;
