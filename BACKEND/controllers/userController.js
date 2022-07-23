const User = require("../models/userModel");

const createUser = async (req, res) => {
  //Create a User
  const {
    //Destructure Method used

    firstName,
    lastName,
    email,
    password,
    accountType,
  } = req.body;

  const newUser = new User({
    //Define a new user
    id: Number(req.body.id),
    firstName,
    lastName,
    email,
    dateOfBirth: Date(req.body.dateOfBirth),
    mobile: Number(req.body.mobile),
    userStatus: Boolean(req.body.userStatus),
    password,
    accountType,
  });

  await newUser
    .save()
    .then(() =>
      res
        .status(200)
        .json({ success: true, message: "User Created Successfully" })
    )
    .catch((err) => res.status(500).json({ success: false, message: err }));
};

const getUsers = async (req, res) => {
  //get all users
  User.find()
    .then((users) => res.status(200).json({ success: true, users }))
    .catch((err) => res.status(500).json({ success: false, message: err }));
};

const getUser = async (req, res) => {
  //get the user by Id
  const { id } = req.params; //get the id from the request parameter
  User.findById(id)
    .then((user) => res.status(200).json({ success: true, user }))
    .catch((err) => res.status(500).json({ success: false, message: err }));
};

const updateUser = async (req, res) => {
  //Update the user by Id
  const { id } = req.params;
  const { firstName, lastName, email, password, accountType } = req.body; //get other properties from the request body except id

  User.findByIdAndUpdate(id, {
    id: Number(req.body.id),
    firstName,
    lastName,
    email,
    dateOfBirth: Date(req.body.dateOfBirth),
    mobile: Number(req.body.mobile),
    userStatus: Boolean(req.body.userStatus),
    password,
    accountType,
  })
    .then(() =>
      res
        .status(200)
        .json({ success: true, message: "User Updated Successfully" })
    )
    .catch((err) => res.status(500).json({ success: false, message: err }));
};

const deleteUser = async (req, res) => {
  //Delete the user by Id
  const { id } = req.params;
  User.findByIdAndDelete(id)
    .then(() =>
      res
        .status(200)
        .json({ success: true, message: "USer Deleted Successfully" })
    )
    .catch((err) => res.status(500).json({ success: false, message: err }));
};
module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
