const express = require('express')
const router = express.Router()
const db = require("../dbAllProfiles")

router.get('/', (req, res) =>{
    db.getUsers()
    .then(users =>{
        const viewData = {users:users}
        res.render('partials/allProfile', viewData)
        .catch(err=>{
            res.status(500).send('DATABASE ERROR:' + err.message)
        })

    })
})



module.exports = router


