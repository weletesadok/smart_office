const Comment = require("../models/comment");
const Post = require("../models/post");
const User = require("../models/user");

const createComment = async (req, res) => {
  try {
    const { post, author, content } = req.body;

    const postExists = await Post.findById(post);
    const userExists = await User.findById(author);

    if (!postExists) {
      return res.status(400).json({ message: "Post not found" });
    }

    if (!userExists) {
      return res.status(400).json({ message: "User not found" });
    }

    const newComment = new Comment({
      post,
      author,
      content,
    });

    const savedComment = await newComment.save();

    res.status(201).json(savedComment);
  } catch (error) {
    res.status(500).json({ message: "Error creating comment", error });
  }
};

const updateComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const { content } = req.body;

    const updatedComment = await Comment.findByIdAndUpdate(
      commentId,
      { content },
      { new: true, runValidators: true }
    );

    if (!updatedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(500).json({ message: "Error updating comment", error });
  }
};

const getCommentById = async (req, res) => {
  try {
    const { commentId } = req.params;

    const comment = await Comment.findById(commentId)
      .populate("post")
      .populate("author");

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving comment", error });
  }
};

const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find().populate("post").populate("author");

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving comments", error });
  }
};

const deleteComment = async (req, res) => {
  try {
    const { commentId } = req.params;

    const deletedComment = await Comment.findByIdAndDelete(commentId);

    if (!deletedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting comment", error });
  }
};

module.exports = {
  createComment,
  updateComment,
  getCommentById,
  getAllComments,
  deleteComment,
};
