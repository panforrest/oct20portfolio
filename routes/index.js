var express = require('express');
var router = express.Router();

var helper = require('sendgrid').mail;
var from_email = new helper.Email('guoqianp@gmail.com');
var to_email = new helper.Email('gzpgg3x@gmail.com');

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

		var subject = req.body.subject;
		var content = new helper.Content('text/plain', req.body.message);
		var mail = new helper.Mail(from_email, subject, to_email, content);


		//send email to yourself


		// res.redirect('/confirmation')      //res.redirect('/confirmation', null) NOT WORK  
		var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
		var request = sg.emptyRequest({
		  method: 'POST',
		  path: '/v3/mail/send',
		  body: mail.toJSON(),
		});

		sg.API(request, function(error, response) {
		  console.log(response.statusCode);
		  console.log(response.body);
		  console.log(response.headers);

			if (error){
				res.json({
					confirmation: 'fail',
					message: error
				})

				return
			}

            res.redirect('/confirmation')
			// res.json({
			// 	confirmation: 'success',
			// 	response: response.body    //but wny?
			// })

		    return



		});



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
