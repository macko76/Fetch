"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.post("/create", (request, response) => {
    const cardUrl = request.body.cardUrl;
    const cardTitle = request.body.cardTitle;
    const cardImage = request.body.cardImage;
    const cardDescription = request.body.cardDescription;
    const cardCategory = request.body.cardCategory;

    knex('resources')
      .insert({url: cardUrl, 
              image: cardImage, 
              title: cardTitle, 
              description: cardDescription,
              category_id: cardCategory})
      .then((results) => {
        console.log("success!");
        response.json(results);
    });
  });

  return router;
  
}