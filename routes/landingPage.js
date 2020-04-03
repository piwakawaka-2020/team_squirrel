const express = require('express')
const router = express.Router()
const dbFunc = require('../database/dbHome')

router.get('/', (req,res)=> {
    const template = 'home'
    res.render(template)
})
router.post('/', (req,res) => {
    dbFunc.addData(req.body).then(dbFunc.viewData).then(userId =>{
        console.log(req.body.pic_link)
        //redirect to pokemonpage
        res.redirect('/pokemon/' + userId)
        })
        .catch(err => {
            console.log(err.message)
        })
})
    




module.exports = router;
