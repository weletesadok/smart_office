const mongoose = require("mongoose");
const databaseuri = process.env.DATABASE_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(databaseuri.toString());
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
