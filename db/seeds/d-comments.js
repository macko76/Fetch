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
        knex('comments').insert({body: 'Be sure to try hot chicken!', user_id: markId, resource_id: 3}),
        knex('comments').insert({body: 'it will be the last thing you do...', user_id: markId, resource_id: 3}),
        knex('comments').insert({body: 'Those bison look cold…', user_id: markId, resource_id: 5}),
        knex('comments').insert({body: 'Actually bison have a thick coat..', user_id: markId, resource_id: 5}),
        knex('comments').insert({body: 'This guy is an a**hole!', user_id: markId, resource_id: 4}),
        knex('comments').insert({body: 'Delicious!!', user_id: markId, resource_id: 10}),
        knex('comments').insert({body: 'This will put you right to sleep.', user_id: markId, resource_id: 2}),
        knex('comments').insert({body: 'One of the great epics of the silver screen. Incredible direction, photography, and acting, especially from Peter O\'Toole', user_id: mikeId, resource_id: 6}),
        knex('comments').insert({body: 'Lavar Ball is a G!', user_id: markId, resource_id: 7}),
        knex('comments').insert({body: 'Well done, SpaceX! Keep at it.', user_id: mikeId, resource_id: 8}),
        knex('comments').insert({body: 'Corollary, if you don\'t want to talk to them, just tell them to go Google it.', user_id: mikeId, resource_id: 10}),
        knex('comments').insert({body: 'Please make it stop.', user_id: markId, resource_id: 13}),
        knex('comments').insert({body: 'This ain\'t RuPaul\'s best friend race.', user_id: markId, resource_id: 14}),
        knex('comments').insert({body: 'Actually druling rn.', user_id: markId, resource_id: 15}),
        knex('comments').insert({body: '🔥', user_id: mikeId, resource_id: 17}),
        knex('comments').insert({body: 'Submarines freak me out', user_id: markId, resource_id: 16}),
      ]);
    });
};