const router = require('express').Router();

// getUsers, getSingleUser, createUser, addFriends, removeFriends, updateUser, deleteUser
// which is defined in the user controller (we want to require this)

const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController');