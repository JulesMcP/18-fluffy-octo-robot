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
} = require("../../controllers/thought-controller");

// /api/thoughts
router
    .route("/")
    .get(getAllThoughts)
    .post(addThought);

// /api/thoughts/:id
router
    .route("/:id")
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought);

// /api/:thoughtId/reactions
router
    .route("/:thoughtId/reactions")
    .post(addReaction);

// /api/:thoughtId/:reactionId
router
    .route("/:thoughtId/:reactionId")
    .delete(removeReaction);

// export thought-routes
module.exports = router;