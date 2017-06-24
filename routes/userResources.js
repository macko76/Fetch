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


