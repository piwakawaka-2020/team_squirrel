const env = process.env.NODE_ENV || 'development'
const knex = require('knex')
const config = require('./knexfile')
const database = knex(config[env])

module.exports = {
  getPokemon: getPokemon,
  selectedPokemon: selectedPokemon,
  deleteSelectedPokemon: deleteSelectedPokemon,
  // choosePokemon: choosePokemon,
}

function getPokemon (db = database) {
  return db('pokemons').select()
}

// function choosePokemon(){
//   for(let i = 0;i < document.querySelectorAll('.pokemon').length;i++){
//     let id = undefined;
//     if(pokemonChoice[i].checked == true){
//       console.log(pokemonChoice[i].value)
//     }
//   }
// }

function selectedPokemon(id, db = database){
  return db('pokemons')
  .where('id', id)
  .update('isSelected', 1)
  .then(data=>{
    return db('pokemons')
    .where('isSelected', 1)
    .first()
    .then(pokemon=>pokemon)
  })
}

function deleteSelectedPokemon(isSelected, db = database){
  return db('pokemons')
  .where('isSelected', isSelected)
  .delete()
}