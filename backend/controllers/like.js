const Like = require("../models/like");
const Post = require("../models/post");
const User = require("../models/user");

const likePost = async (req, res) => {
  try {
    const { post, user } = req.body;

    const postExists = await Post.findById(post);
    const userExists = await User.findById(user);

    if (!postExists) {
      return res.status(400).json({ message: "Post not found" });
    }

    if (!userExists) {
      return res.status(400).json({ message: "User not found" });
    }

    const existingLike = await Like.findOne({ post, user });
    if (existingLike) {
      return res
        .status(400)
        .json({ message: "Post already liked by this user" });
    }

    const newLike = new Like({
      post,
      user,
    });

    const savedLike = await newLike.save();

    res.status(201).json(savedLike);
  } catch (error) {
    res.status(500).json({ message: "Error liking post", error });
  }
};

const unlikePost = async (req, res) => {
  try {
    const { post, user } = req.body;

    const postExists = await Post.findById(post);
    const userExists = await User.findById(user);

    if (!postExists) {
      return res.status(400).json({ message: "Post not found" });
    }

    if (!userExists) {
      return res.status(400).json({ message: "User not found" });
    }

    const existingLike = await Like.findOne({ post, user });
    if (!existingLike) {
      return res.status(400).json({ message: "Like not found" });
    }

    await existingLike.delete();

    res.status(200).json({ message: "Post unliked successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error unliking post", error });
  }
};

module.exports = {
  likePost,
  unlikePost,
};
