const express = require("express");
const router = express.Router();
const {
  createChat,
  getChatsBySender,
  getChatsByReceiver,
  getAllChats,
  deleteChat,
} = require("./../controllers/chat");

router.post("/", createChat);
router.get("/sender/:senderId", getChatsBySender);
router.get("/receiver/:receiverId", getChatsByReceiver);
router.get("/", getAllChats);

router.delete("/:chatId", deleteChat);

module.exports = router;
