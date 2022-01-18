const mongoose = require('mongoose');

const thoughtsSchema = new mongoose.Schema({
    author: { type: String, required: true },
})



const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;