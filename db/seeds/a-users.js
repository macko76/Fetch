exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 1, first_name: 'Rebecca', last_name: 'Haliburton', full_name: 'Rebecca Haliburton', email: 'rebs@rebs.ca', password: 'rebs', profile_photo: 'http://lorempixel.com/100/100/'}),
        knex('users').insert({id: 2, first_name: 'Mark', last_name: 'Bick', full_name: 'Mark Bick', email: 'mark@mark.ca', password: 'mark', profile_photo: 'http://lorempixel.com/100/100/'}),
        knex('users').insert({id: 3, first_name: 'Mike', last_name: 'Shin', full_name: 'Mike Shin', email: 'mike@mike.ca', password: 'mike', profile_photo: 'http://lorempixel.com/100/100/'})
      ]);
    });
};
