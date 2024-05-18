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

router.post("/register", uploadFiles, register);
router.post("/login", login);
router.post("/refresh", refresh);
router.post("/logout", logout);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.post("/update-password", updatePassword);

module.exports = router;
