const { Schema, model, Types } = require('mongoose');
// we want to validate the email with a regular expression
const validateEmail = function (email) {
    const regularExpression = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return regularExpression.test(email);
}
const friends = require('./reactions');

// user model should have username, email, thoughts, friends, toJSON and an id
// thoughts should refererence thoughts, friends should reference User
// type, req, unique, trim
// same, but validate for email

// type: Schema.Types.ObjectID

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: [validateEmail, "Enter a valid email address"],
        },
        thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thoughts' }],
        friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],        // so that these will show up when we post the data
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

userSchema.virtual('friendCount').get(function () { return this.friends.length });

const User = model('User', userSchema);

module.exports = User;