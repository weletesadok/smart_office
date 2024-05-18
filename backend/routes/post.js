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

router.route("/").post(uploadFiles, createPost).get(getAllPosts);

router
  .route("/:postId")
  .put(uploadFiles, updatePost)
  .get(getPostById)
  .delete(deletePost);

module.exports = router;
