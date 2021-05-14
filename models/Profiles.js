const mongoose = require('mongoose')

const profilesSchema = new mongoose.Schema({
    name: {
         type: String,
         required: true
    }
})

module.exports = mongoose.model('Profiles', profilesSchema)