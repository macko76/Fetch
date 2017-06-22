exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', (table) => {
    table.increments('id').unsigned().primary();
    table.text('body').notNull();
    table.integer('user_id').unsigned().index().references('id').inTable('users');
    table.integer('resource_id').unsigned().index().references('id').inTable('resources');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('comments');
  };
