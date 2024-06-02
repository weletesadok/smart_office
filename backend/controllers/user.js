const bcrypt = require("bcrypt");
const User = require("../models/user");

const createUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      role: req.body.roles || ["Employee"],
      department: req.body.department,
      avatar: req.fileUrls,
      bio: req.body.bio,
    });

    const savedUser = await user.findByIdAndUpdate(req.body.id, user, {
      new: true,
    });

    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
};
const getUserById = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving user", error });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving users", error });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userExist = await User.findById(userId);
    if (!userExist)
      return res.status(400).json({ message: "user doesn't exist" });


    const user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      email: req.body.email,
      roles: req.body.roles || "Employee",
      avatar: req.fileUrls[0],
      bio: req.body.bio,
    };

    const updatedUser = await User.findByIdAndUpdate(userId, user);

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
};

module.exports = {
  createUser,
  getUserById,
  deleteUser,
  getAllUsers,
  updateUser,
};
