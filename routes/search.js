"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  router.get("/main", (request, response) => {

    const searchText = ("%" + request.query.searchText + "%").toLowerCase();

    knex
      .select("*")
      .from("resources")
      .where(knex.raw('LOWER("url")'), 'like', `${searchText}`)
      .orWhere(knex.raw('LOWER("title")'), 'like', `${searchText}`)
      .orWhere(knex.raw('LOWER("description")'), 'like', `${searchText}`)
      .then((results) => {
        response.json(results);
      });
  });

  router.get("/user", (request, response) => {

    const searchText = ("%" + request.query.searchText + "%").toLowerCase();

    knex
      .select("*")
      .from("resources")
      .where(knex.raw('LOWER("url")'), 'like', `${searchText}`)
      .orWhere(knex.raw('LOWER("title")'), 'like', `${searchText}`)
      .orWhere(knex.raw('LOWER("description")'), 'like', `${searchText}`)
      .andWhere({user_id: request.session.userId})
      .then((results) => {
        response.json(results);
      });
  });

  return router;

};