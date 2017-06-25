"use strict";

const express = require('express');
const router  = express.Router();


module.exports = (knex) => {


  router.post("/:resource_id", (request, response) => {
     var user = request.session.user.id;

      knex('comments')
        .insert({
          body: request.body.content,
          user_id: user,
          resource_id: request.params.resource_id
        })
        .then((results) => {
          response.json(results);
      });
    });

  router.get("/:resource_id", (request, response) => {
      var user = request.session.user;
      knex
        .select("*")
        .from("comments")
        .where({
          resource_id: request.params.resource_id
        })
        .then((results) => {
          var commentsArray = [];
          for (var i = 0; i < results.length; i++) {
            var commentObj = {
              id: results[i].resource_id,
              content: results[i].body,
            };
            commentsArray.push(commentObj);
          }
          response.json(commentsArray);
        });
      });

  return router;
  
}