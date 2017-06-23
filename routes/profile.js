'use strict';

const express = require('express');
const router = express.Router();

module.exports = (knex) => {


router.get("/", (request, response) => {   
  knex
      .select("*")
      .from("users")
      .where({
        id: request.session.userId
      })
      .then((results) => {
        response.json(results);
    });
  });

  return router;

// VIEW USER RESOURCES = GET /user/:id/fetch
// VIEW SPECIFIC RESOURCE = /GET /user/:id/fetch/:id
// ADD RESOURCE = POST /user/:id/fetch/:id
// DELETE RESOURCE = DELETE /user/:id/fetch/:id
// EDIT RESOURCE = POST /user/:id/fetch/:id

// RATE RESOURCE = POST /user/:id/fetch/:id/rate, DELETE /user/:id/fetch/:id/rate
// COMMENT ON RESOURCE = POST /user/:id/fetch/:id/comment, DELETE /user/:id/fetch/:id/comment


}
  // Queries database for users.id todo: Use a datahelper here?
  // router.get('/user/profile', auth, (request, response) => {
  //   knex
  //     .select()
  //     .from("users")
  //     .where({id: req.param.id})
  //     .then((results) => {
  //       res.json(results);
  //     });

  //   response.render('profile');
  // });

  // // Intakes form data, updates database, redirects to /profile todo: Use a datahelper here?
  // router.post('/user/profile', (request, response) => {
  //   let first_name = req.body.first_name;
  //   let last_name = req.body.last_name;
  //   let email = req.body.email;
  //   let password = req.body.password;
  //   let profile_photo = req.body.profile_photo;

  //   knex
  //     .insert({
  //       first_name: first_name,
  //       last_name: last_name,
  //       email: email,
  //       password: password,
  //       profile_photo: profile_photo
  //     }).into("users");
  //     then((results) => {
  //       res.json(results);
  //     });
  //     response.render('profile');
  // });

