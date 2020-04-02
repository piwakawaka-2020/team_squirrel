
exports.up = function(knex) {
  return knex.schema.table('pokemons', (table) => {
      table.boolean('isSelected').notNullable().defaultTo(false)
  })
};

exports.down = function(knex) {
  return knex.schema.table('pokemons', (table) => {
      table.dropColumn('isSelected')
  })
};
