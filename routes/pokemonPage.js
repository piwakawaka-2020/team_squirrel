const express = require('express')
const db = require('../database/db')
const dbHome = require('../database/dbHome')
const router = express.Router()

router.get('/:id', (req, res)=>{
  const userId = req.params.id
  const template = 'pokemonPage'
  db.getPokemon()
  .then(pokemons=>{
    // console.log(pokemons)
    res.render(template, {pokemons: pokemons, id: userId})
  })
  .catch(err =>{
    res.status(500).send('DATABASE ERROR: ' + err.message)
  });
})


router.post('/:id', (req,res)=>{
  const userId = req.params.id
  console.log(userId)
  const pokemonId = req.body.id
  db.selectedPokemon(pokemonId)
  .then(()=>{
    db.addPokemonIdToUsers(userId, pokemonId)
      .then(() => {
        db.addUserIdToPokemons(userId, pokemonId)
          .then(() => {
            console.log("done")
          })
      res.redirect(`/profile/${userId}`)
    })
      })
      .catch((err) => {
        console.log(err.message)
      })
})

module.exports = router;