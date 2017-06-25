exports.up = function(knex, Promise) {
  return knex.schema.createTable('resources', (table) => {
    table.increments('id').unsigned().primary();
    table.string('url', 1000).notNull();
    table.string('image', 1000).notNull();
    table.string('title').notNull();
    table.text('description', 1000);
    table.timestamps(true, true);
    table.integer('user_id').unsigned().index().references('id').inTable('users');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('resources');
  };
