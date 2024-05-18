const Post = require("../models/post");

module.exports = {
  addPost: async (req, res) => {
    try {
      const newPost = new Post({
        title: req.body.title,
        detail: req.body.detail,
        fileUrl: req.file ? req.file.path : null,
      });
      const savedPost = await newPost.save();
      console.log("post created", savedPost, req.file);
      res.status(201).json(savedPost);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  getPosts: async (req, res) => {
    try {
      const posts = await Post.find();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
