const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const User = mongoose.model('Portfolio', userschema);

module.exports = User;