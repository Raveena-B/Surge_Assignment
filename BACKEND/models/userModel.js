const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  //create the attributes of the user schema
  id: { type: Number, required: true, trim: true },
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  dateOfBirth: { type: Date, required: true, trim: true },
  mobile: { type: Number, required: true, trim: true },
  userStatus: { type: Boolean, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  accountType: { type: String, required: true, trim: true },
});

module.exports = mongoose.model("users", userSchema); //Define the Database name
