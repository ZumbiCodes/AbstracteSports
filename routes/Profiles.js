const express = require('express')
const router = express.Router()
const Profiles = require('../models/Profiles')

//All profiles Route
router.get ('/',(req, res) => [
    res.render('Profiles/index')    
])

// new profile route
router.get ('/new', (req, res) => {
    res.render('Profiles/new', {Profiles: new Profiles() })
})

//create Profile route
router.post ('/', (req, res) => {
    res.send('create')
})

module.exports = router