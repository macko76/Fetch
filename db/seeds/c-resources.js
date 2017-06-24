exports.seed = function(knex, Promise) {

var rebeccaId = knex('users').where({first_name: 'Rebecca'}).select('id');
var markId = knex('users').where({first_name: 'Mark'}).select('id');
var mikeId = knex('users').where({first_name: 'Mike'}).select('id');

var entertainmentId = knex('categories').where({name: 'Entertainment'}).select('id');
var foodId = knex('categories').where({name: 'Food'}).select('id');
var educationId = knex('categories').where({name: 'Education'}).select('id');
var lifestyleId = knex('categories').where({name: 'Lifestyle'}).select('id');
var newsId = knex('categories').where({name: 'News'}).select('id');


  return knex('resources').del()
    .then(function () {
      return Promise.all([
        knex('resources').insert({url: 'http://lorempixel.com/300/200/', title: 'The Secret of dogs', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', user_id: rebeccaId, category_id: entertainmentId}),
        knex('resources').insert({url: 'http://lorempixel.com/300/200/', title: 'Bone-sniffing dogs to search for Amelia Earhart\'s remains', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', user_id: mikeId, category_id: foodId}),
        knex('resources').insert({url: 'http://lorempixel.com/300/200/', title: 'Charges laid against men behind publication banned by Canada Post', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', user_id: mikeId, category_id: educationId}),  
        knex('resources').insert({url: 'http://lorempixel.com/300/200/', title: 'LCBO extends hours ahead of possible strike', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', user_id: rebeccaId, category_id: lifestyleId}),
        knex('resources').insert({url: 'http://lorempixel.com/300/200/', title: 'Your laptop needs more Sass', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', user_id: markId, category_id: foodId}),
        knex('resources').insert({url: 'http://lorempixel.com/300/200/', title: '🔥 Hopefully emojis work too.', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', user_id: markId, category_id: foodId}),              
      ]);

  });

};