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


  router.post("/:resource_id", (request, response) => {

    const resourceID = request.params.resource_id;
    const cardUrl = request.body.cardUrl;
    const cardTitle = request.body.cardTitle;
    const cardImage = request.body.cardImage;
    const cardDescription = request.body.cardDescription;
    const cardCategory = request.body.cardCategory;
    const cardUserId = request.session.userId;

    console.log("--------"  + resourceID + "---------");

    knex('resources')
      .update({
              url: cardUrl, 
              image: cardImage, 
              title: cardTitle, 
              description: cardDescription,
              category_id: cardCategory,
              user_id: cardUserId})
      .where ({id: resourceID})
      .then((results) => {
        response.redirect('/user');
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