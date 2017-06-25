exports.up = function(knex, Promise) {
  return knex.schema.createTable('ratings', (table) => {
    table.increments('id').unsigned().primary();
    table.boolean('rating').notNull();
    table.integer('resource_id').unsigned().index().references('id').inTable('resources');
    table.integer('user_id').unsigned().index().references('id').inTable('users');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('ratings');
  };

