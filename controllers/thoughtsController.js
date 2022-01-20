const { Thoughts, User } = require('../models');


module.exports = {
    // Get all thoughts
    getThoughts(req, res) {
        Thoughts.find()
            .populate({ path: 'reactions', select: '-__v' })
            .select('-__v')
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },
    // get a thought by a specific ID
    getThoughtById(req, res) {
        Thoughts.findOne({ _id: req.params.thoughtId })
            .populate('reactions')
            .select('-__v')
            .then(async (thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    // create a new thought
    createThought(req, res) {
        Thoughts.create(req.body)
            .then((thought) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $push: { thoughts: thought._id.toString() } },
                    { new: true }
                ).then((updatedUser) => {
                    res.json(updatedUser);
                })
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    // update the thought
    updateThought(req, res) {
        Thoughts.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'Tough luck, bub. No thought with this id!' })
                    : res.json(thought)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // Delete a user and associated apps
    deleteThought(req, res) {
        Thoughts.findOneAndDelete({ _id: req.params.thoughtId })
            .then(() => res.json({ message: 'Thought deleted!' }))
            .catch((err) => res.status(500).json(err));
    },
    // add and delete reactions
    createReaction(req, res) {
        Thoughts.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'Tough luck, bub. No thought with this id!' })
                    : res.json(thought)
            )
            .catch((err) => {
                res.status(500).json(err);
            });
    },
    deleteReaction(req, res) {
        Thoughts.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reaction: { reactionId: req.params.reactionId } } },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
};