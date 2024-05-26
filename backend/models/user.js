const mongoose = require("mongoose");

const { Schema } = mongoose;

const rolesEnum = ["Admin", "Head", "Employee"];

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: {
        type: [String],
        default: ["Employee"]
    },
    active: {
        type: Boolean,
        default: true
    },
    department: {
      type: String
      // type: Schema.Types.ObjectId,
      // ref: "Department",
      // required: function () {
      //   return this.role === "Head" || this.role === "Employee";
      // },
    },
    phoneNumber: {
      type: String,
      trim: true,
    },
    avatar: {
      type: String,
      trim: true,
    },
    bio: {
      type: String,
      trim: true,
    },
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
