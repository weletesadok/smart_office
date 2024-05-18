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

router.route("/").post(uploadFiles, createUser).get(getAllUsers);

router
  .route("/:userId")
  .get(getUserById)
  .put(uploadFiles, updateUser)
  .delete(deleteUser);

module.exports = router;
