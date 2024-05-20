const mongoose = require("mongoose");

const UserModel = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validator: [
        /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/,
        "Please enter a valid email address",
      ],
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      default: "",
    },
    lovedHotels: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hotel",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserModel);
