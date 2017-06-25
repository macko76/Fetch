<<<<<<< HEAD
// "use strict";

// const express = require('express');
// const router  = express.Router();

// module.exports = (knex) => {

// router.get("/", (req, res) => {
//     knex
//       .select("*")
//       .from("ratings")
//       .then((results) => {
//         res.json(results);
//     });
//   });


// router.post("/inc", (request, response) => {
//     knex('ratings')
//       .where({resource_id: 1})
//       .increment('rating', 1)
//       .then((results) => {
//         response.json(results);
//     });
//   });



// router.post("/inc", (request, response) => {
//     knex('ratings')
//       .where({resource_id: 1})
//       .decrement('rating', 1)
//       .then((results) => {
//         response.json(results);
//     });
//   });


//   return router;

// // VIEW USER RESOURCES = GET /user/:id/fetch
// // VIEW SPECIFIC RESOURCE = /GET /user/:id/fetch/:id
// // ADD RESOURCE = POST /user/:id/fetch/:id
// // DELETE RESOURCE = DELETE /user/:id/fetch/:id
// // EDIT RESOURCE = POST /user/:id/fetch/:id

// // RATE RESOURCE = POST /user/:id/fetch/:id/rate, DELETE /user/:id/fetch/:id/rate
// // COMMENT ON RESOURCE = POST /user/:id/fetch/:id/comment, DELETE /user/:id/fetch/:id/comment

// }


//   tweetsRoutes.post("/:id/likes", function(req, res) {
//     res.status(201).send();
//     DataHelpers.incrementLikes(req.params.id, (err, tweets) => {
//       return;
//     });
//   });

//   tweetsRoutes.post("/:id/unlikes", function(req, res) {
//     res.status(201).send();
//     DataHelpers.decrementLikes(req.params.id, (err, tweets) => {
//       return;
//     });
//   });
=======
"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

router.get("/", (req, res) => {
    knex
      .select("*")
      .from("ratings")
      .then((results) => {
        res.json(results);
    });
  });


router.post("/inc", (request, response) => {
    knex('ratings')
      .where({resource_id: 1})
      .increment('rating', 1)
      .then((results) => {
        response.json(results);
    });
  });



router.post("/dec", (request, response) => {
    knex('ratings')
      .where({resource_id: 1})
      .decrement('rating', 1)
      .then((results) => {
        response.json(results);
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


  // tweetsRoutes.post("/:id/likes", function(req, res) {
  //   res.status(201).send();
  //   DataHelpers.incrementLikes(req.params.id, (err, tweets) => {
  //     return;
  //   });
  // });

  // tweetsRoutes.post("/:id/unlikes", function(req, res) {
  //   res.status(201).send();
  //   DataHelpers.decrementLikes(req.params.id, (err, tweets) => {
  //     return;
  //   });
  // });
>>>>>>> master
