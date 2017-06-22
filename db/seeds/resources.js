exports.seed = function(knex, Promise) {
  return knex('resources').del()
    .then(function () {
      return Promise.all([
        knex('resources').insert({id: 1, url: 'https://www.fillmurray.com/300/200', title: 'This title is wonderful', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}),
        knex('resources').insert({id: 2, url: 'https://www.fillmurray.com/300/200', title: 'This title is okay', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}),
        knex('resources').insert({id: 3, url: 'https://www.fillmurray.com/300/200', title: 'This title is horrible', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}),        
      ]);
    });
};
