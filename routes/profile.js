'use strict';

const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  // Queries database for users.id todo: Use a datahelper here?
  router.get('/user/profile', auth, (request, response) => {
    knex
      .select()
      .from("users")
      .where({id: req.param.id})
      .then((results) => {
        res.json(results);
      });

    response.render('profile');
  });

  // Intakes form data, updates database, redirects to /profile todo: Use a datahelper here?
  router.post('/user/profile', (request, response) => {
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let email = req.body.email;
    let password = req.body.password;
    let profile_photo = req.body.profile_photo;

    knex
      .insert({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        profile_photo: profile_photo
      }).into("users");
      then((results) => {
        res.json(results);
      });
      response.render('profile');
  });

  return router;
};
