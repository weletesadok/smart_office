const express = require("express");
const router = express.Router();
const {
  createComment,
  updateComment,
  getCommentById,
  getAllComments,
  deleteComment,
} = require("./../controllers/comment");

router.route("/").post(createComment).get(getAllComments);

router
  .route("/:commentId")
  .put(updateComment)
  .get(getCommentById)
  .delete(deleteComment);

module.exports = router;
