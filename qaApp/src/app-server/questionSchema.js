const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    owner: {},
    question: String,
    votes: [],
    comments: [],
    answers: [],
    created_at: Date
});

module.exports = mongoose.model('Question', questionSchema);