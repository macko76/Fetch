"use strict";

const express = require('express');
const router  = express.Router();


var lies;


module.exports = (knex) => {

  router.post("/", (request, response) => {
    console.log(request.body.content);
  
    knex('comments')
      .insert({body: request.body.content})
      .then((results) => {
        response.json(results);
    });
  });

  router.get("/", (request, response) => {
    var dummy_comments = [
      {
        id: 1,
        created: Date.now(),
        content: 'sick, dude',
        fullname: 'Dude bro',
        upvote_count: 2,
        user_has_upvoted: false
      },
      {
        id: 3,
        created: Date.now(),
        content: 'I work really really really hard',
        fullname: 'Kim K',
        upvote_count: 5,
        user_has_upvoted: false
      }
    ]
    response.json(dummy_comments);
  })

  return router;
  
}