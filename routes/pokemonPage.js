const express = require('express')
const db = require('../db')
const router = express.Router()

router.get('/', (req, res)=>{
  const template = 'partials/pokemonPage'
  db.getPokemon()
  .then(pokemons=>{
    // console.log(pokemons)
    res.render(template, {pokemons: pokemons})
  })
  .catch(err =>{
    res.status(500).send('DATABASE ERROR: ' + err.message)
  });
})


router.post('/', (req,res)=>{
  // db.choosePokemon()
  // console.log(req.body.id)
  const id = req.body.id
  db.selectedPokemon(id)
  .then(pokemon=>{
    db.deleteSelectedPokemon(pokemon.isSelected)
    .then(()=>{
      console.log('pokemon deleted')
    })
    console.log(pokemon)
  })
})

module.exports = router;