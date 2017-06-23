'use strict';
const ENV         = process.env.ENV || "development";
const express = require('express');
const cookieSession = require('cookie-session');
const knexConfig  = require("../knexfile");
const knex = require("knex")(knexConfig[ENV]);
const router = express.Router();
const bodyParser  = require("body-parser");


function userAuthentication(email, password) {
	const usersQuery =  knex.select("*").from("users").where({
		email,
		password
	})
	.limit(1);
	const userPromise = usersQuery
		.then(users => users[0]);
	return userPromise;
}

module.exports = (knex) => {

  // Checks for cookie; If cookie present, alerts user and redirects to user/:id/fetch; If cookie not present, renders /login
  router.get('/', (request, response) => {
    if (cookieSession.userID) {
      alert('You are already logged in!');
    } else {
      response.render('login');
		}
  });

/**
 * Calls function userAuthentication with arguments req.body.email and req.body.password; If userAuthentication returns
 * true, sets cookie userID to req.body.email and redirects to user/:id/fetch; If userAuthentication returns false, returns 403
// */
	router.post('/', (request, response) => {
		// console.log(request.body);
		const userPromise = userAuthentication(request.body.email, request.body.password)
		userPromise
			.then(user => {
				if (!user) {
    } else {
					response.status(403).send('Your username or password or both is incorrect.');
				} else {
					request.session.userId = user.id;
					// should eventually redirect to the user page : response.redirect('/user/ + user.id + '/fetch/');
					response.redirect('/');
				}
			});
	});

	// Clears cookie userId and redirects to root
	// router.post('/logout', (request, response) => {
	// request.session = null;
	// response.redirect('/');
	// });

	return router;
};
