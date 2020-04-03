const knex = require('knex')
const config = require('../knexfile')
const env = process.env.NODE_ENV || 'development'
const database = knex(config[env])

function addData(newData, db = database) {
    return db('users')
    .insert({id: 1000, name: newData.name, pic_link: newData.pic_link})
    .then(id => {
        console.log(id)
        return id
    })
}

function showData(db=database) {
    return db('users').select()
}

module.exports = {
    addData,
    showData,
}