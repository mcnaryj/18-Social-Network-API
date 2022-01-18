const router = require('express').Router();

// getThoughts, getThoughtbyID, createThought, createReaction, deleteReaction, deleteThought, updateThought
// which are imported via the thoughtsController

// we can chain the get and post together for getThoughts and CreateThough
const {
    getThoughts,
    getThoughtById,
    createThought,
    deleteThought,
    updateThought,
    createReaction,
    deleteReaction,
    removeFriend
} = require('../../controllers/thoughtsController');