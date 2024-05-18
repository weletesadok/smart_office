require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { createPost } = require("./controllers/post");
const { uploadFiles } = require("./middlewares/uploadFiles");

mongoose.connect("mongodb://localhost:27017/smart_office");
app.use(cors());
app.use(express.json());
app.use(express.static("files"));
app.post("/auth", uploadFiles, createPost);

app.listen(3000, () => {
  console.log("server started");
});
