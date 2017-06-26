"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {



router.get("/", (request, response) => {   
  knex
  .select("*")
  .from("resources")
  .where({
    user_id: request.session.userId
  })
  .orderBy('created_at', 'asc')
  .then((results) => {
    response.json(results);
  });
});

return router;


}