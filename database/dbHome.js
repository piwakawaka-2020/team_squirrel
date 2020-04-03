const knex = require('knex')
const config = require('../knexfile')
const env = 'development'
const database = knex(config[env])

function addData(newData, db = database) {
    return db('users').insert({name: newData.name, pic_link: newData.pic_link})
}

function showData(db=database) {
    return db('users').select()
}

module.exports = {
    addData,
    showData,
}