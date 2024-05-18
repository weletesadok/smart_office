const Chat = require("../models/chat");
const User = require("../models/user");

const createChat = async (req, res) => {
  try {
    const { sender, receiver, message } = req.body;

    const senderExists = await User.findById(sender);
    const receiverExists = await User.findById(receiver);

    if (!senderExists) {
      return res.status(404).json({ message: "Sender not found" });
    }

    if (!receiverExists) {
      return res.status(404).json({ message: "Receiver not found" });
    }

    const newChat = new Chat({
      sender,
      receiver,
      message,
    });

    const savedChat = await newChat.save();

    res.status(201).json(savedChat);
  } catch (error) {
    res.status(500).json({ message: "Error creating chat message", error });
  }
};

const getChatsBySender = async (req, res) => {
  try {
    const { senderId } = req.params;

    const chats = await Chat.find({ sender: senderId })
      .populate("sender", "name")
      .populate("receiver", "name");

    res.status(200).json(chats);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving chats by sender", error });
  }
};

const getChatsByReceiver = async (req, res) => {
  try {
    const { receiverId } = req.params;

    const chats = await Chat.find({ receiver: receiverId })
      .populate("sender", "name")
      .populate("receiver", "name");

    res.status(200).json(chats);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving chats by receiver", error });
  }
};

const getAllChats = async (req, res) => {
  try {
    const chats = await Chat.find()
      .populate("sender", "name")
      .populate("receiver", "name");

    res.status(200).json(chats);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving all chats", error });
  }
};

const deleteChat = async (req, res) => {
  try {
    const { chatId } = req.params;

    const deletedChat = await Chat.findByIdAndDelete(chatId);

    if (!deletedChat) {
      return res.status(404).json({ message: "Chat message not found" });
    }

    res.status(200).json({ message: "Chat message deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting chat message", error });
  }
};

module.exports = {
  createChat,
  getChatsBySender,
  getChatsByReceiver,
  getAllChats,
  deleteChat,
};
