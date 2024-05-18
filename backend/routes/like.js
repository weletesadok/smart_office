const express = require("express");
const router = express.Router();
const { likePost, unlikePost } = require("./../controllers/like");

router.route("/like").post(likePost);

router.route("/unlike").post(unlikePost);

module.exports = router;
