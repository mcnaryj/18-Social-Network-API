const { Schema, model } = require('mongoose');
const moment = require('moment');
const reactions = require('./reactions');
// we want to require the reactions here
// as well as moment

// text, reactions, when it was created, username, toJSON

const thoughtsSchema = new Schema(
    {
        text: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 666,
        },
        reactions: [reactions],
        username: {
            type: String,
            required: true,
        },
        // for timestamps
        createdAt: {
            type: Date,
            default: Date.now,
            get: (time) => moment(time).format('MM/DD/YYYY'),
        },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

// rxns count
// using virtuals to get the amt of reactions associated with each thought
thoughtsSchema.virtual('numberOfReactions').get(function () {
    return this.reactions.length;
});



const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;