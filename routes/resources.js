"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (request, response) => {
    knex
    .select("*")
    .from("resources")
    .then((results) => {
      response.json(results);
    });
  });

//---------------------------------------------------------------- filtering index categories
  router.get("/:filter", (request, response) => {
    const categoryFilter = request.params.filter;
    knex
    .select("*")
    .from("resources")
    .where({category_id: categoryFilter})
    .then((results) => {
      response.json(results);
    });
  });

//---------------------------------------------------------------- filtering user categories
  router.get("/user/:filter", (request, response) => {
    const categoryFilter = request.params.filter;
    knex
    .select("*")
    .from("resources")
    .where({category_id: categoryFilter})
    .andWhere({user_id: request.session.userId})
    .then((results) => {
      response.json(results);
    });
  });


  router.post("/:resource_id", (request, response) => {
    const resource_id = request.params.resource_id;
    const cardUrl = request.body.cardUrl;
    const cardTitle = request.body.cardTitle;
    const cardImage = request.body.cardImage;
    const cardDescription = request.body.cardDescription;
    const cardCategory = request.body.cardCategory;
    const cardUserId = request.session.userId;

    knex('resources')
      .where({id: resource_id})
      .update({url: cardUrl, 
              image: cardImage, 
              title: cardTitle, 
              description: cardDescription,
              user_id: cardUserId,
              category_id: cardCategory})
      .then((results) => {
        response.json(results);
    });
  });

  router.get("/:resource_id/rating", (request, response) => {
    const user = request.session.userId;
    const resource = request.params.resource_id;
      knex
      .select("rating")
      .from("ratings")
      .where({user_id: user})
      .andWhere({resource_id: resource})
      .then((results) => {
        response.json(results);
      });
  });

  router.post("/:resource_id/inc", (request, response) => {
    const resource = request.params.resource_id;
    const user = request.session.userId;
    knex('ratings')
      .where({id: resource})
      .andWhere({user_id: user})
      .increment('rating', 1)
      .then((results) => {
        console.log("success!");
        response.json(results);
    });
  });

  router.post("/:resource_id/dec", (request, response) => {
    const resource = request.params.resource_id;
    const user = request.session.userId;
    knex('ratings')
      .where({id: resource})
      .andWhere({user_id: user})
      .decrement('rating', 1)
      .then((results) => {
        console.log("success!");
        response.json(results);
     });
   });

  return router;

}
// VIEW USER RESOURCES = GET /user/:id/fetch
// VIEW SPECIFIC RESOURCE = /GET /user/:id/fetch/:id
// ADD RESOURCE = POST /user/:id/fetch/:id
// DELETE RESOURCE = DELETE /user/:id/fetch/:id
// EDIT RESOURCE = POST /user/:id/fetch/:id

// RATE RESOURCE = POST /user/:id/fetch/:id/rate, DELETE /user/:id/fetch/:id/rate

// COMMENT ON RESOURCE = POST /user/:id/fetch/:id/comment, DELETE /user/:id/fetch/:id/comment
