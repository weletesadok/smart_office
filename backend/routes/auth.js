const express = require("express");
const router = express.Router();
const { uploadFiles } = require("../middlewares/uploadFiles");
const {
  register,
  login,
  refresh,
  logout,
  forgotPassword,
  updatePassword,
  resetPassword,
} = require("./../controllers/auth");

router.route("/register").post(register);

router.route("/").post(login);

router.route("/refresh").get(refresh);

router.route("/logout").post(logout);

router.route("/forgot-password").post(forgotPassword);

router.route("/reset-password").post(resetPassword);

router.route("/update-password").post(updatePassword);

module.exports = router;
