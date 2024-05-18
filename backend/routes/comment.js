const express = require("express");
const router = express.Router();
const {
  createComment,
  updateComment,
  getCommentById,
  getAllComments,
  deleteComment,
} = require("./../controllers/comment");

router.post("/", createComment);
router.put("/:commentId", updateComment);
router.get("/:commentId", getCommentById);
router.get("/", getAllComments);
router.delete("/:commentId", deleteComment);

module.exports = router;
