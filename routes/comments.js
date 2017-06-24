"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  



router.post("/", (request, response) => {   
  
  knex('comments')
      .insert({body: request.body})
      .then((results) => {
        response.json(results);
    });
  });

  return router;
  
}


