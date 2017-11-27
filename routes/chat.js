const express	= require('express');
const session	= require("express-session");
const flash		= require('express-flash');
const router 	= express.Router();

/* GET /connection */
router.get('/', function(req, res, next) {
	console.log("GET /chat");
	let login = (req.session.login) ? req.session.login : 'Inconnue';
	res.render('chat', {
		session: req.session,
		login: login,
		flash: req.flash
	});
});

module.exports = router;
