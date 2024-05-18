const express = require("express");
const router = express.Router();
const { uploadFiles } = require("../middlewares/uploadFiles");

const {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers,
} = require("./../controllers/user");

router.post("/", uploadFiles, createUser);
router.get("/:userId", getUserById);
router.put("/:userId", uploadFiles, updateUser);
router.delete("/:userId", deleteUser);
router.get("/", getAllUsers);

module.exports = router;
