exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories', (table) => {
    table.increments('id').unsigned().primary();
    table.string('name').notNull();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('categories');
  };
