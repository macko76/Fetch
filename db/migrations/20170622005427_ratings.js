exports.up = function(knex, Promise) {
  return knex.schema.createTable('ratings', (table) => {
    table.increments('id').unsigned().primary();
    table.integer('rating').notNull();
    table.integer('resource_id').unsigned().index().references('id').inTable('resources');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('ratings');
  };
