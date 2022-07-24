const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adminListSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const admin = mongoose.model("admins", adminListSchema);
module.exports = admin;
