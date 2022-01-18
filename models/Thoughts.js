const mongoose = require('mongoose');
// we want to require the reactions here
// as well as moment

// text, reactions, when it was created, username, toJSON

const thoughtsSchema = new Schema(
    {
        text: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        reactions: {

        },
        createdAt: {
            date: { type: Date, default: Date.now },

        },
        toJSON: {

        }
    }
)



const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;