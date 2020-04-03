const express = require('express')
const router = express.Router()
const dbFunc = require('../database/dbHome')

router.get('/', (req,res)=> {
    const template = 'home'
    res.render(template)
})
router.post('/', (req,res) => {
    dbFunc.addData(req.body).then(userId =>{
        //redirect to pokemonpage
        console.log(userId[0])
        res.redirect('/pokemon/' + userId[0])
        })
        .catch(err => {
            console.log(err.message)
        })
})
    




module.exports = router;
