'use strict';

const express = require('express');
const router = express.Router();


function auth(req, res, next) {
  if (req.session.userId) {
    next();
  } else {
    res.redirect("/login");
  }
}

module.exports = (knex) => {

	router.get("/", (req, res) => {
		var user = req.session.user;
		res.render("index", {user});
	});


	router.get("/user", auth, (req, res) => {
		var user = req.session.user;
		res.render("user-resources", {user});
	});

	router.get("/user/profile", auth, (req, res) => {
		var user = req.session.user;
		res.render('user-profile', {user});
	});

	// -------------------------------- Logout
	router.post("/logout", (req, res) => {
		req.session = null;
		console.log("Logout successful");
		res.redirect("/");
	});

	return router;
};
