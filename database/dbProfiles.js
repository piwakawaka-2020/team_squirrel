const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser
 
}

function getUser (id, db =connection) {
  return db('users')
        .where('users.id', id)
        .join('pokemons', 'users.id', '=', 'pokemons.id')
        .first()
}