const env = process.env.NODE_ENV || 'development'
const knex = require('knex')
const config = require('../knexfile')
const database = knex(config[env])

module.exports = {
  getPokemon: getPokemon,
  selectedPokemon: selectedPokemon,
  deleteSelectedPokemon: deleteSelectedPokemon,
  addPokemonIdToUsers: addPokemonIdToUsers,
  addUserIdToPokemons: addUserIdToPokemons
}

function getPokemon (db = database) {
  return db('pokemons').select()
}



function selectedPokemon(id, db = database){
  return db('pokemons')
  .where('id', id)
  .first()
}

function deleteSelectedPokemon(isSelected, db = database){
  return db('pokemons')
  .where('isSelected', isSelected)
  .delete()
}


function addPokemonIdToUsers(userId, pokemonId,db = database) {
  return db('users')
    .where('id', userId)
    .update({pokemon_id: pokemonId})
}

function addUserIdToPokemons(userId, pokemonId, db = database) {
  return db('pokemons')
    .where('id', pokemonId)
    .update({user_id: userId})
}