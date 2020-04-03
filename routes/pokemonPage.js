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
  // db.choosePokemon()
  // console.log(req.body.id)
  const userId = req.params.id
  console.log(userId)
  const pokemonId = req.body.id
  db.selectedPokemon(pokemonId)
  .then(pokemon=>{
    db.addPokemonIdToUsers(userId, pokemonId)
      .then((id) => {
        db.addUserIdToPokemons(userId, pokemonId)
          .then(() => {
            console.log("done")
          })
    //     db.deleteSelectedPokemon(pokemon.isSelected)
    // .then(()=>{
    //   console.log('pokemon deleted')
      res.redirect(`/profile/${userId}`)
    })
      })
})

module.exports = router;