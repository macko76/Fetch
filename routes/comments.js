"use strict";

const express = require('express');
const router  = express.Router();


module.exports = (knex) => {


  router.post("/", (request, response) => {
    knex('comments')
      .insert({
        body: request.body.content
        resource_id: })
      .then((results) => {
        response.json(results);
    });
  });

  router.get("/", (request, response) => {
      var user = request.session.user;
      knex
        .select("*")
        .from("comments")
        .orderBy('created_at', 'asc')
        .where({
          resource_id: request.params.id;
        })
        .then((results) => {
          var commentsArray = [];
          for (var i = 0; i < results.length; i++) {
            var commentObj = {
              id: results[i].resource_id,
              content: results[i].body,
              fullName: user.first_name,
            };
            commentsArray.push(commentObj);
          }
          response.json(commentsArray);
        });
      });

  return router;
  
}