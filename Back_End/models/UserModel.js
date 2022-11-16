const mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    username: String,
    password: String,
    dateCreateUser: {
        type: Date,
        default: Date.now()
    }
})
module.exports = mongoose.model('User', UserSchema, 'Users')