const knex = require('knex')
const config = require('../knexfile')
const env = 'development'
const database = knex(config[env])

function getPokemon(pokemon_name, db = database) {
    return db('pokemons')
        .where('pokemon_name', pokemon_name)
        .first()
}

module.exports = {
    getPokemon: getPokemon
}