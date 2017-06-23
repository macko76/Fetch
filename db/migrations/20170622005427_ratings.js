exports.up = function(knex, Promise) {
  return knex.schema.createTable('ratings', (table) => {
    table.increments('id').unsigned().primary();
    table.integer('rating').notNull().defaultTo(0);
    table.integer('resource_id').unsigned().index().references('id').inTable('resources');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('ratings');
  };
