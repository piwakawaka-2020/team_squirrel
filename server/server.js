const express = require('express')
const hbs = require('express-handlebars')

const pokemonsPageRoute = require('../routes/pokemonPage')

const server = express()

// Middleware

server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')
server.use(express.urlencoded({extended: true}))
server.use(express.static('public'))

// Routes

server.use('/pokemonPage', pokemonsPageRoute)


module.exports = server;