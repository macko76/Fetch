'use strict';

const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  //
  router.get('/user/:id', (request, response) => {
    knex
      .select('req.param.id')
      .from('resources')
      .then((results) => {
        res.json(results);
      });
  });

  return router;
  response.render('profile');
};
)
;

// Updates user profile
router.post('/user/:id', (request, response) => {
  write;
  to;
  database;

}
})
;

}
;
