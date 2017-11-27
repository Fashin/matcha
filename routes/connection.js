const express	= require('express');
const session	= require("express-session");
const flash		= require('express-flash');
const database	= require('../model/database');
const router 	= express.Router();

/*
*		Route get for login page
*/
router.get('/', function(req, res, next) {
	console.log("GET /connection");
	res.render('connection', { session: req.session, flash: req.flash });
});

router.post('/', function(req, res) {
		console.log("POST /connection");
    let User = {
			login: req.body.user_login,
			password: req.body.password
    };
		let way = "/connection";

		database.getConnection((err, db) => {
			db.query('SELECT * FROM users WHERE login = ?', User.login,  (error, results, fields) => {
				if (error) throw error;
				if (results[0] && results[0].login)
				{
					if (results[0].password == User.password)
					{
						req.flash("notice", "bienvenue " + User.login);
						req.session.login = User.login;
						way = "/";
					}
					else
						flash.error = "mauvais mot de passe";
				}
				else
					flash.error = "mauvais login";
				db.release();
				return (res.redirect(way));
			});
		})
});


module.exports = router;
