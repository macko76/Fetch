'use strict';

const express = require('express');
const router = express.Router();

const dataHelpers = require('public/scripts/datahelpers.js'); // MAB: This is a placeholder

module.exports = (knex) => {

  // GET, /login
  router.get('/login', (request, response) => {
    response.render('login');
  });

  /**
   * POST, /login
   * Sets cookie called userID equal to user's email
   */
  router.post('/login', (request, response) => {
    if (userAuthentication(req.body.email, req.body.password)) {
      request.session.userId = req.body.email;
      response.redirect('user/:id/fetch');
    } else {
      response.status(403).send('Your username or password or both is incorrect.');
    }
  });

  // POST, /logout
  router.post('/logout', (request, response) => {
    request.session = null;
    response.redirect('/');
  });

};
