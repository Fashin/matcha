const express	= require('express');
const session	= require("express-session");
const flash		= require('express-flash');
const router 	= express.Router();

/* GET /connection */
router.get('/', function(req, res, next) {
	let user = (req.session.login) ? req.session.login : "unregister user";
	console.log("GET /index with session user : " + user);
  res.render('index', { session: req.session, flash: req.flash });
});

module.exports = router;
