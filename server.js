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

const pageRoutes = require("./routes/pages");
const authRoutes = require("./routes/auth");
const resourceRoutes = require("./routes/resources");
const userResourceRoutes = require("./routes/userResources");
const profileRoutes = require("./routes/profile");
const commentRoutes = require("./routes/comments");
const resourcesModify = require("./routes/resourcesModify");

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

// Mount all resource routes
app.use("/", pageRoutes(knex));
app.use("/api/resources", resourceRoutes(knex));
app.use("/api/user", userResourceRoutes(knex));
app.use("/login", authRoutes(knex));
app.use("/api/userProfile", profileRoutes(knex));
app.use("/api/comments", commentRoutes(knex));
<<<<<<< HEAD
// app.use("/api/ratings", ratingsRoutes(knex));

app.post('/user', function(req, res){
  // console.log(req.body);
  // var result = {
  //   name: "Michael: I am sending some data back to the AJAX Call"
  // }
  // res.json(result); //being sent back to the place where AJAX Call was made
});
=======
app.use("/user/resources", resourcesModify(knex));
>>>>>>> c7494009deddf8d1bb20a0aa574003017651a27a

app.listen(PORT, () => {
  console.log("Fetch is listening on port " + PORT);
});