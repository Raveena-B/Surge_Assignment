const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const noteSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const Note = mongoose.model("notes", noteSchema);
module.exports = Note;
