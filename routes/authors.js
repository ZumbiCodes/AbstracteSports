const express = require('express')
const router = express.Router()

//All authors Route
router.get ('/',(req, res) => [
    res.render('Authors/index')    
])

// new author route
router.get ('/new', (req, res) => {
    res.render('authors/new')
})

//create author route
router.post('/', (req, res) => {
    res.send('create')
})

module.exports = router 