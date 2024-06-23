const express = require("express");
const router = express.Router();
const {
  createComment,
  updateComment,
  getCommentById,
  getAllComments,
  getCommentByPost,
  deleteComment,
} = require("./../controllers/comment");

router.route("/").post(createComment).get(getAllComments);
router.route("/:postId").get(getCommentByPost)

router
  .route("/:commentId")
  .put(updateComment)
  .delete(deleteComment);

module.exports = router;
