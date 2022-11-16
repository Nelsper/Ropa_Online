const mongoose = require('mongoose')

let UserShema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    username: String,
    password: String
})
module.exports = mongoose.model('User', UserShema, 'Users')