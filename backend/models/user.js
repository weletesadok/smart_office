const mongoose = require("mongoose");

const { Schema } = mongoose;

const rolesEnum = ["Admin", "DepartmentHead", "Employee"];

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
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
    role: {
      type: String,
      enum: rolesEnum,
      required: true,
      default: "Employee",
    },
    department: {
      type: Schema.Types.ObjectId,
      ref: "Department",
      required: function () {
        return this.role === "DepartmentHead" || this.role === "Employee";
      },
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
