const express = require("express");
const router = express.Router();
const { likePost, unlikePost } = require("./../controllers/like");

router.post("/like", likePost);
router.post("/unlike", unlikePost);

module.exports = router;
