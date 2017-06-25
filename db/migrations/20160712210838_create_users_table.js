exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').unsigned().primary();
    table.string('first_name');
    table.string('last_name');
    table.string('full_name');
    table.string('email').notNull();
    table.string('password').notNull();
    table.string('profile_photo', 1000);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
  };