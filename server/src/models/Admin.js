const mongoose = require("mongoose");
const { Schema } = mongoose;

const AdminSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Admin", AdminSchema);
