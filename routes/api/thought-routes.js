// set dependencies
const router = require("express").Router();

// define Thought route options
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    removeThought,
    updateThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router
    .route('/')
    .get(getAllThoughts)

router
    .route('/:id')
    .post(addThought);

// /api/thoughts/:id
router
    .route('/:id/thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .post(addReaction)
    .delete(removeThought);

// /api/:thoughtId/:reactionId
router
    .route('/:id/:thoughtId/:reactionId')
    .delete(removeReaction);

// export thought-routes
module.exports = router;