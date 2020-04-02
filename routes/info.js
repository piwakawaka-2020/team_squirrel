const express = require('express')
const router = express.Router()

const dbInfoFunctions = require('../database/dbInfo')


router.get('/:name', (req, res) => {
    const pokemonName = req.params.name
                            .charAt(0)
                            .toUpperCase() + req.params.name.slice(1)
    dbInfoFunctions.getPokemon(pokemonName)
        .then((pokemon) => {
            const view = 'pokemonInfo'
            const viewData = { pokemon: pokemon }
            res.render(view, viewData)
        })
        .catch((err) => {
            console.log(err.message)
        })
})

module.exports = router