exports.up = function(knex) {
return knex.schema.table('resources', function(data) {
        data.integer('category_id').unsigned().index().references('id').inTable('categories');
      });
};

exports.down = function(knex) {
  return knex.schema.table('resources', function(data) {
          data.dropColumn('category_id');
        });
};
