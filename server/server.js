const express = require('express')
const hbs = require('express-handlebars')
const userProfileRoutes = require ('../routes/user_profile')
const allProfiles = require ('../routes/all_profiles')

const server = express()

// Middleware

server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')
server.use(express.urlencoded({extended: true}))
server.use(express.static('public'))

// Routes

server.use('/user_profile/', userProfileRoutes)
server.use('/allProfiles/', allProfiles)

module.exports = server;