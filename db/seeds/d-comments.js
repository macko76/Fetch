exports.seed = function(knex, Promise) {
  return knex('comments').del()
    .then(function () {
      return Promise.all([
        knex('comments').insert({body: 'This is the most amazing web application, how much funding do you want????'}),
      ]);
    });
};
