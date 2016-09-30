var Express = require('express');
var router = Express.Router();
var models = require('../models');


router.get('/', function(req,res,next) {
	res.send("YO, TGIF");
	console.log("Ya server is RUNNIN");
});



module.exports = router;
