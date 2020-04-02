
exports.up = function(knex) {
  return knex.schema.createTable('pokemons', (table) => {
      table.increments('id').primary()
      table.string('pokemon_name')
      table.string("big_image")
      table.string("small_image")
      table.string("pokemon_info")
      table.string("type")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('pokemons')
};
