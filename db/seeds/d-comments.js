exports.seed = function(knex, Promise) {

  var rebeccaId = knex('users').where({first_name: 'Rebecca'}).select('id');
  var markId = knex('users').where({first_name: 'Mark'}).select('id');
  var mikeId = knex('users').where({first_name: 'Mike'}).select('id');

  // var cardOneId = knex('resources').where({title: 'The Secret of dogs'}).select('id');
  // var cardTwoId = knex('resources').where({title: 'Bone-sniffing dogs to search for Amelia Earhart\'s remains'}).select('id');
  // var cardThreeId = knex('resources').where({title: 'Charges laid against men behind publication banned by Canada Post'}).select('id');
  // var cardFourId = knex('resources').where({title: 'LCBO extends hours ahead of possible strike'}).select('id');
  // var cardFiveId = knex('resources').where({title: 'Your laptop needs more Sass'}).select('id');

  return knex('comments').del()
    .then(function () {
      return Promise.all([
        knex('comments').insert({body: 'I think this is a better read: https://stratechery.com/2017/amazons-new-customer/', user_id: markId, resource_id: 1}),
      ]);
    });
};