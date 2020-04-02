const express = require('express')
const hbs = require('express-handlebars')

const server = express()
const landingPageRoutes = require('../routes/landingPage.js')
// Middleware

server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')
server.use(express.urlencoded({extended: true}))
server.use(express.static('public'))
server.use('/', landingPageRoutes)

// Routes
server.use('/', landingPageRoutes)

    



module.exports = server;