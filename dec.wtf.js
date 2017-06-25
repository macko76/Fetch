require('dotenv').config();
const ENV             = process.env.ENV || "development";

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);


    knex('ratings')
      .where({resource_id: 4})
      .andWhere({user_id: 1})
      .update('rating', 't')
      .then((results) => {
        console.log("success!", results);
        return knex('ratings')
            .select('*')
            .where({
                resource_id: 4
            })
            .limit(1)
            .then(results => results)
     })
     .then(q => {
         console.log('Q', q);
         knex.destroy();
     })
