"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  router.get("/:searchText", (request, response) => {
    // const searchText = request.params.searchText;
    console.log("This is the searchText:", searchText);

    /*knex
     .select("*")
     .from("resources"
     .where({
     user_id: request.session.userId
     })
     .then((results) => {
     response.json(results);
     });*/
  });

  return router;

};
