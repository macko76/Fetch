'use strict';

const express = require('express');
const router = express.Router();

const dataHelpers = require('public/scripts/datahelpers.js'); // MAB: This is a placeholder

module.exports = (knex) => {

  // Checks for cookie; If cookie present, alerts user and redirects to user/:id/fetch; If cookie not present, renders /login
  router.get('/login', (request, response) => {
    if (session.userID) {
      alert('You are already logged in!');
    } else
      response.render('login');
  });

  /**
   * Calls function userAuthentication with arguments req.body.email and req.body.password; If userAuthentication returns
   * true, sets cookie userID to req.body.email and redirects to user/:id/fetch; If userAuthentication returns false, returns 403
  */
  router.post('/login', (request, response) => {
    if (userAuthentication(req.body.email, req.body.password)) {
      request.session.userId = req.body.email;
      response.redirect('user/:id/fetch');
    } else {
      response.status(403).send('Your username or password or both is incorrect.');
    }
  });

  // Clears cookie userId and redirects to root
  router.post('/logout', (request, response) => {
    request.session = null;
    response.redirect('/');
  });

};
