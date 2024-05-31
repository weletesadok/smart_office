require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const { logger, logEvents } = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const connectDB = require("./config/dbConn");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

console.log(process.env.NODE_ENV), "mode";

connectDB();

app.use(logger);

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.static("files"));

app.use(cookieParser());

app.use("/auth", require("./routes/auth"));
app.use("/users", require("./routes/user"));
app.use("/posts", require("./routes/post"));
app.use("/destinations", require("./routes/destination"));
app.use("/chats", require("./routes/chat"));
app.use("/comments", require("./routes/comment"));

app.all("*", (req, res) => {
  res.status(404).json({ message: "Not Found" });
});

app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
  logEvents(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    "mongoErrLog.log"
  );
});
