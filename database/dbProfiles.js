const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getPokemon: getPokemon
}

function getPokemon(id, db = connection) {
  return db('pokemons')
    .where('id', id)
    .first()
}

function getUser (id, db =connection) {
  return db('users')
    .where('id', id)
    .first()
}