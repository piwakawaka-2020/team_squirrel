const express = require('express')
const router = express.Router()
const db = require("../database/dbProfiles")

router.get('/:id', (req, res) =>{
    const id = req.params.id
    db.getUser(id)
    .then(user =>{
        db.getPokemon(user.pokemon_id)
        .then((pokemon) => {
        const viewData = {pokemon, user}
        res.render('profile', viewData)
        })
    })
    .catch((err) => {
        console.log(err.message)
    })
})

module.exports = router


