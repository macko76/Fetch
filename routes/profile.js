
'use strict';

const express = require('express');
const router = express.Router();

module.exports = (knex) => {


router.get('/', (request, response) => {   
  knex
      .select('first_name', 'last_name', 'email', 'profile_photo')
      .from('users')
      .where({
        id: request.session.userId
      })
      .then((results) => {
        response.json(results);
    });
  });

  return router;

}
