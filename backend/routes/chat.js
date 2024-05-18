const express = require("express");
const router = express.Router();
const {
  createChat,
  getChatsBySender,
  getChatsByReceiver,
  getAllChats,
  deleteChat,
} = require("./../controllers/chat");

router.route("/").post(createChat).get(getAllChats);

router.route("/sender/:senderId").get(getChatsBySender);

router.route("/receiver/:receiverId").get(getChatsByReceiver);

router.route("/:chatId").delete(deleteChat);

module.exports = router;
