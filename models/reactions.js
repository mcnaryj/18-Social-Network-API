// going to be added to the set with thoughts
// require moment, Schema and Types
const { Schema, Types } = require('mongoose');


// we want a reaction id, body, created at, username, toJSON (with a getter) and id set to false

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectID,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 666,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (time) => moment(time).format('MM/DD/YYYY'),
        },
        username: {
            type: String,
            required: true,
        },
        toJSON: {
            getters: true,
        },
        id: false,
    })


module.exports = reactionSchema;