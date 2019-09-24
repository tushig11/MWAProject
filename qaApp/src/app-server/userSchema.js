const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    image: String,
    firstname: String,
    lastname: String,
    email: { type: String, required: true },
    password: { type: String, required: true },
    biography: String,
    followers: [],
    following: [],
    questions: [],
    answers: [],
    created_at: Date,
    reputation: Number
});

module.exports = mongoose.model('User', userSchema);