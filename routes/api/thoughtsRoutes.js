const router = require('express').Router();

// getThoughts, getThoughtbyID, createThought, createReaction, deleteReaction, deleteThought, updateThought
// which are imported via the thoughtsController
const {
    getThoughts,
    getThoughtbyId,
    createThought,
    deleteThought,
    updateThought,
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughtsController');

// we can chain the get and post together for getThoughts and CreateThought
router.route("/").get(getThoughts).post(createThought);
router.route('/:thoughtId').get(getThoughtbyId).delete(deleteThought).patch(updateThought);
router.route("/:thoughtId/reactions").post(createReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;


