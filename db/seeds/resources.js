exports.seed = function(knex, Promise) {
  return knex('resources').del()
    .then(function () {
      return Promise.all([
        knex('resources').insert({id: 1, url: 'http://lorempixel.com/300/200/', title: 'The Secret of dogs', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}),
        knex('resources').insert({id: 2, url: 'http://lorempixel.com/300/200/', title: 'Bone-sniffing dogs to search for Amelia Earhart\'s remains', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}),
        knex('resources').insert({id: 3, url: 'http://lorempixel.com/300/200/', title: 'Charges laid against men behind publication banned by Canada Post', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}),  
        knex('resources').insert({id: 4, url: 'http://lorempixel.com/300/200/', title: 'LCBO extends hours ahead of possible strike', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}),
        knex('resources').insert({id: 5, url: 'http://lorempixel.com/300/200/', title: 'Your laptop needs more Sass', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}),
        knex('resources').insert({id: 6, url: 'http://lorempixel.com/300/200/', title: '🔥 Hopefully emojis work too.', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}),              
      ]);
    });
};
