const mongoose = require('mongoose');

// we want to validate the email with a regular expression
const validateEmail = function (email) {
    const regularExpression = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return regularExpression.test(email);
}

// user model should have username, email, thoughts, friends, toJSON and an id
// thoughts should refer to thoughts, friends should refer to User
// type, req, unique, trim
// same, but validate for email

// type: Schema.Types.ObjectID

const userSchema = new mongoose.Schema({
    author: { type: String, required: true },
    comment: { type: String, required: true },

})

const User = model('user', userSchema);

module.exports = User;