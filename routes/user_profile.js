const express = require('express')
const router = express.Router()
const db = require("../dbProfiles")

router.get('/:id', (req, res) =>{
    const id = req.params.id 
    db.getUser(id)
    .then(user =>{
        const viewData = {user:user}
        console.log(user)
        res.render('profile', viewData)

    })
})

module.exports = router


