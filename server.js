"use strict";

require('dotenv').config();

const PORT            = process.env.PORT || 8080;
const ENV             = process.env.ENV || "development";
const express         = require("express");
const bodyParser      = require("body-parser");
const sass            = require("node-sass-middleware");
const app             = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');
      
const bcrypt      = require('bcrypt');

const cookieSession = require('cookie-session'); 
// Seperated Routes for each Resource
const authRoutes = require("./routes/auth");
const resourceRoutes = require("./routes/resources");
const userResourceRoutes = require("./routes/userResources");
const profileRoutes = require("./routes/profile");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

app.use(cookieSession({
  secret: 'no secret'
}));

function auth(req, res, next) {
  if (req.session.userId) {
    next();
  } else {
    res.redirect("/login");
  }
}

// Mount all resource routes
app.use("/api/resources", resourceRoutes(knex));
app.use("/api/user", userResourceRoutes(knex));
app.use("/login", authRoutes(knex));
app.use("/api/userProfile", profileRoutes(knex));

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/user", auth, (req, res) => {
  res.render("user-resources");
});

app.get("/user/profile", auth, (req, res) => {
  res.render('user-profile');
})

app.listen(PORT, () => {
  console.log("Fetch is listening on port " + PORT);
});

