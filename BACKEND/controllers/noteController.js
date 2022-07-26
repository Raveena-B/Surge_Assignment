const Note = require("../models/noteModel");

const addNote = async (req, res) => {
  //Create a Note
  const {
    //Destructure Method used

    title,
    description,
  } = req.body;

  const newNote = new Note({
    //Define a new note
    title,
    description,
  });

  await newNote
    .save()
    .then(() =>
      res
        .status(200)
        .json({ success: true, message: "Note Created Successfully" })
    )
    .catch((err) => res.status(500).json({ success: false, message: err }));
};

const getNotes = async (req, res) => {
  //get all Notes
  Note.find()
    .then((notes) => res.status(200).json({ success: true, notes }))
    .catch((err) => res.status(500).json({ success: false, message: err }));
};

const getNote = async (req, res) => {
  //get the note by Id
  const { id } = req.params; //get the id from the request parameter
  Note.findById(id)
    .then((note) => res.status(200).json({ success: true, note }))
    .catch((err) => res.status(500).json({ success: false, message: err }));
};

const updateNote = async (req, res) => {
  //Update the note by Id
  const { id } = req.params;
  const { title, description } = req.body; //get other properties from the request body except id

  Note.findByIdAndUpdate(id, {
    title,
    description,
  })
    .then(() =>
      res
        .status(200)
        .json({ success: true, message: "Note Updated Successfully" })
    )
    .catch((err) => res.status(500).json({ success: false, message: err }));
};

const deleteNote = async (req, res) => {
  //Delete the note by Id
  const { id } = req.params;
  Note.findByIdAndDelete(id)
    .then(() =>
      res
        .status(200)
        .json({ success: true, message: "Note Deleted Successfully" })
    )
    .catch((err) => res.status(500).json({ success: false, message: err }));
};
module.exports = {
  addNote,
  getNotes,
  getNote,
  updateNote,
  deleteNote,
};
