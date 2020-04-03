const express = require('express')
const router = express.Router()
const dbFunc = require('../database/dbHome')

router.get('/', (req,res)=> {
    const template = 'home'
    res.render(template)
})
router.post('/', (req,res) => {
    dbFunc.addData(req.body).then(dbFunc.viewData).then(userId =>{
        //redirect to pokemonpage
        res.redirect('/pokemonprofile/' + userId)
        })
})
    




module.exports = router;
