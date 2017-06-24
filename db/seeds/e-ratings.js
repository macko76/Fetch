exports.seed = function(knex, Promise) {

  var cardOneId = knex('resources').where({title: 'The Secret of dogs'}).select('id');
  var cardTwoId = knex('resources').where({title: 'Bone-sniffing dogs to search for Amelia Earhart\'s remains'}).select('id');
  var cardThreeId = knex('resources').where({title: 'Charges laid against men behind publication banned by Canada Post'}).select('id');
  var cardFourId = knex('resources').where({title: 'LCBO extends hours ahead of possible strike'}).select('id');
  var cardFiveId = knex('resources').where({title: 'Your laptop needs more Sass'}).select('id');

  return knex('ratings').del()
    .then(function () {
      return Promise.all([
        knex('ratings').insert({rating: '5', resource_id: cardOneId}),
        knex('ratings').insert({rating: '4', resource_id: cardTwoId}),
        knex('ratings').insert({rating: '3', resource_id: cardThreeId}),
        knex('ratings').insert({rating: '2', resource_id: cardFourId}),
        knex('ratings').insert({rating: '1', resource_id: cardFiveId}),                                
      ]);
    });
};
