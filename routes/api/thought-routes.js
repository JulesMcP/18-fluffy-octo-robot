// set dependencies
const router = require("express").Router();

// define Thought route options
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    deleteThought,
    updateThought,
    createReaction,
    deleteReaction
} = require("../../controllers/thought-controller");

// /api/thoughts
router
    .route("/")
    .get(getAllThoughts)
    .post(createThought);

// /api/thoughts/:id
router
    .route("/:id")
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// /api/:thoughtId/reactions
router
    .route("/:thoughtId/reactions")
    .post(createReaction);

// /api/:thoughtId/:reactionId
router
    .route("/:thoughtId/:reactionId")
    .delete(deleteReaction);

// export thought-routes
module.exports = router;