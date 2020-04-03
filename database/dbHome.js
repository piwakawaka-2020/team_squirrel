const knex = require('knex')
const config = require('../knexfile')
const env = process.env.NODE_ENV || 'development'
const database = knex(config[env])

function addData(newData, db = database) {
    return db('users')
    .insert({name: newData.name, pic_link: newData.pic_link})
    .then(id => {
        console.log("This is the addData log = ", id)
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