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


router.route('/').get(getUsers).post(createUser);
router.route('/:userId').get(getSingleUser).delete(deleteUser).patch(updateUser);
router.route('/userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
