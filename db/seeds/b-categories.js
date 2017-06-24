exports.seed = function(knex, Promise) {

  return knex('categories').del()
    .then(function () {
      return Promise.all([
        knex('categories').insert({name: 'Entertainment'}),
        knex('categories').insert({name: 'Food'}),
        knex('categories').insert({name: 'Education'}),
        knex('categories').insert({name: 'Lifestyle'}),
        knex('categories').insert({name: 'News'}),
      ]);
    });

};