
exports.up = function(knex) {
  return knex.schema.table('pokemons', (table) => {
      table.integer('user_id')
  })
};

exports.down = function(knex) {
  return knex.schema.table('pokemons', (table) => {
      table.dropColumn('user_id')
  })
};
