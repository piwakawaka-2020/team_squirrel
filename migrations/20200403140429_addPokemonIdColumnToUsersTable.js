
exports.up = function(knex) {
  return knex.schema.table('users', (table) => {
      table.integer('pokemon_id')
  })
};

exports.down = function(knex) {
  return knex.schema.table('users', (table) => {
      table.dropColumn('pokemon_id')
  })
};
