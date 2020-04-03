const express = require('express')
const hbs = require('express-handlebars')
const landingPageRoutes = require('../routes/landingPage')
const infoRoutes = require('../routes/info')
const userProfileRoutes = require ('../routes/user_profile')
const pokemonsPageRoute = require('../routes/pokemonPage')

const server = express()
// Middleware

server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')
server.use(express.urlencoded({extended: true}))
server.use(express.static('public'))

// Routes
server.use('/info', infoRoutes)
server.use('/user_profile/', userProfileRoutes)
server.use('/', landingPageRoutes)
server.use('/pokemonPage', pokemonsPageRoute)


module.exports = server;