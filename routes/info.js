const express = require('express')
const router = express.Router()

const db = require('../database/dbInfo')


router.get('/:name', (req, res) => {
    const pokemonName = req.params.name
                            .charAt(0)
                            .toUpperCase() + req.params.name.slice(1)
    console.log("name = ", pokemonName)
    db.getPokemon(pokemonName)
        .then((pokemon) => {
            console.log("pokemon = ", pokemon)
            const view = 'pokemonInfo'
            const viewData = { pokemon: pokemon }
            res.render(view, viewData)
        })
        .catch((err) => {
            console.log(err.message)
        })
})

module.exports = router