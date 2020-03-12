const mongoose = require('mongoose')

const Thought = new mongoose.Schema({
    title:{
        type:  String,
        required: true
    },
    body: {
        type: String,
        required:false
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Thought', Thought)