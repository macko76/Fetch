exports.seed = function(knex, Promise) {
  return knex('ratings').del()
    .then(function () {
      return Promise.all([
        knex('ratings').insert({rating: '5'}),
      ]);
    });
};
