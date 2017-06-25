"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  router.post('/create', (request, response) => {
    const cardUrl = request.body.cardUrl;
    const cardTitle = request.body.cardTitle;
    const cardImage = request.body.cardImage;
    const cardDescription = request.body.cardDescription;
    const cardCategory = request.body.cardCategory;
    const cardUserId = request.session.userId;

    knex('resources')
      .insert({
        url: cardUrl,
        image: cardImage,
        title: cardTitle,
        description: cardDescription,
        category_id: cardCategory,
        user_id: cardUserId
      })
      .then((results) => {
        console.log("success!");
        response.json(results);
      });
  });

  router.get('/:search', (request, response) => {
    var searchTerm = req.body.params;

    knex('resources')
      .where('url', 'like', searchTerm)
      .orWhere('title', 'like', searchTerm)
      .orWhere('description', 'like', searchTerm)
      .then((results) => {
        response.json('awesome');
        // response.json(results);
      })
    ;
  });

  return router;

};