const express = require("express");
const router = express.Router();
const { uploadFiles } = require("../middlewares/uploadFiles");
const {
  createPost,
  updatePost,
  getPostById,
  getAllPosts,
  deletePost,
} = require("./../controllers/post");

router.post("/", uploadFiles, createPost);
router.put("/:postId", uploadFiles, updatePost);
router.get("/:postId", getPostById);
router.get("/", getAllPosts);
router.delete("/:postId", deletePost);

module.exports = router;
