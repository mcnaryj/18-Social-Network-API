const { User, Thoughts } = require('../models');


module.exports = {
    // Get all users
    getThoughts(req, res) {
        Thoughts.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
    getThoughtById(req, res) {
        Thoughts.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    // create a new user
    createThought(req, res) {
        Thoughts.create(req.body)
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'Tough luck, bub. No user with this id!' })
                    : res.json(user)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // Delete a user and associated apps
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : Thoughts.deleteMany({ _id: { $in: user.thoughts } })
            )
            .then(() => res.json({ message: 'User and associated thoughts deleted!' }))
            .catch((err) => res.status(500).json(err));
    },
    // add friends, remove friends
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friend: req.params.friendId } },
            { runValidators: true, new: true }
        )
            .then((friend) =>
                !friend
                    ? res.status(404).json({ message: 'Tough luck, bub. No friends with this id!' })
                    : res.json(friends)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    removeFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.friendId },
            { $pull: { friend: req.params.friendId } },
            { runValidators: true, new: true }
        )
            .then((friend) =>
                !friend
                    ? res.status(404).json({ message: 'No friend with that ID' })
                    : res.json(friend)
            )
            .catch((err) => res.status(500).json(err));
    },
};