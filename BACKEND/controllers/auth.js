const router = require("express").Router();
const User = require("../models/auth");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

//when we use asynchronous function we need try catch block
exports.register = async (req, res) => {
  //controller for register
  const { email, password, userStatus, accountType } = req.body; //destructur e method

  const isAvailable = await User.findOne({
    //check the availability of saving data

    email: { $regex: new RegExp(email, "i") },
  });

  if (isAvailable) {
    // if satisfied return proper error
    return res
      .status(401)
      .json({ error: "Already Planned ! Plz plan something new 😀" });
  }

  try {
    const user = await User.create({
      email,
      password,
      userStatus,
      accountType,
      //this.password filed of user.js in models
    });
    sendToken(user, 200, res);
  } catch (error) {
    if (error.code === 11000) {
      const message = "Already have an account using this email ";
      return res.status(400).json({ success: false, error: message });
    }

    if (error.name === "ValidationError") {
      const message = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({ success: false, error: message });
    }
  }
};

exports.login = async (req, res) => {
  //controller for login
  const { email, password } = req.body;
  console.log(req.body);

  if (!email && !password) {
    //backend validation
    return res
      .status(400)
      .json({ success: false, error: "Please enter username and password" });
  } //400 Bad Request

  try {
    const user = await User.findOne({
      email: { $regex: new RegExp(email, "i") },
    }).select("+password"); //match two passwords

    if (!user) {
      //true
      return res.status(401).json({
        success: false,
        available: "User does not exists. Please contact your admin !",
      });
    }

    const isMatch = await user.matchPasswords(password); //matching the passwords from the received from request and from the db

    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, error: "Invalid Credentials" });
    }

    sendToken(user, 200, res);
  } catch (error) {
    res.status(500).json({
      // 500 internal server error
      success: false,
      error: error.message,
    });
  }
};

exports.forgotpassword = async (req, res) => {
  //controller for forgot password
  const { email } = req.body;

  try {
    const user = await User.findOne({ email }); //check for email availability for sending emails

    if (!user) {
      return res
        .status(404)
        .json({ success: false, error: "Email could not be sent" });
    }

    const resetToken = user.getResetPasswordToken(); // get the password reset token

    await user.save();

    const resetURL = `http://localhost:3000/resetpassword/${resetToken}`; //setting a URL to send to the user for emails

    const message = `
        <center>
        // <img src='https://i.ibb.co/2MbfFCT/logo.png' />
        <h1>Student Note Application</h1><br/><br/></br>
        <h3>You have requested a password reset</h3>
        <p>Please go to this URL to reset password</p>
        <a href=${resetURL} clicktracking=off>${resetURL}</a><br/><br/></br>
        <span>Copyright © 2022 Student Note Application<span></center>
         `;
    try {
      await sendEmail({
        //send email
        to: user.email,
        subject: "Password Reset Request",
        text: message,
      });

      res.status(200).json({ success: true, verify: "Email Sent" });
    } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();

      return res
        .status(500)
        .json({ success: false, error: "Email could not be sent" });
    }
  } catch (error) {
    // next(error);
  }
};

exports.resetpassword = async (req, res) => {
  //controller for reset password
  const {
    firstName,
    lastName,
    mobile,
    dateOfBirth,
    password,
    userStatus,
    email,
  } = req.body;

  const user = await User.findOne({ email });
  user.firstName = firstName; //save prototype
  user.lastName = lastName;
  user.mobile = mobile;
  user.dateOfBirth = dateOfBirth;
  user.password = password;
  user.userStatus = userStatus;

  try {
    await user
      .save()
      .then(() =>
        res
          .status(200)
          .json({ success: true, verify: "Password reset success" })
      )
      .catch((err) => res.status(500).json({ success: false, err }));
  } catch (error) {
    if (error.name === "ValidationError") {
      const message = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({ success: false, error: message });
    }
  }
};

//when we use asynchronous function we need try catch block
exports.registerUser = async (req, res) => {
  //controller for register
  const { email, password, accountType, userStatus } = req.body; //destructur e method

  try {
    const user = await User.create({
      email,
      userStatus,
      password,
      accountType, //this.password filed of user.js in models
    });
    console.log(user);
    sendToken(user, 200, res);
  } catch (error) {
    if (error.code === 11000) {
      const message = "Already have an account using this email ";
      return res.status(400).json({ success: false, error: message });
    }

    if (error.name === "ValidationError") {
      const message = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({ success: false, error: message });
    }
  }
};

exports.get = async (req, res) => {
  await User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json({ err }));
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  await User.findOne({ id })
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json({ err }));
};

exports.updateById = async (req, res) => {
  const { id } = req.params;

  const { firstName, lastName, email, password, accountType } = req.body;

  await User.findByIdAndUpdate(id, {
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
    .then(() => res.json({ message: "Successfully Update the Student" }))
    .catch((err) => res.status(500).json({ err }));
};

exports.deleteById = async (req, res) => {
  const { id } = req.params;

  await User.findByIdAndDelete(id)
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(500).json({ success: false, err }));
};

exports.notifyUser = async (req, res) => {
  const { email, password } = req.body;

  const message = `
        <center>
        // <img src='https://i.ibb.co/2MbfFCT/logo.png' />
        <h1>Student Note Application</h1><br/><br/></br>
        <h3>We created a login for you</h3>
        <p>Please refer the bellow credentials to login to the system</p>
        <p>Email : ${email}</p>
        <p>Password : ${password}</p>
        <br/><br/></br>
        <span>Copyright © 2022 Student Note Application<span></center>
         `;
  try {
    await sendEmail({
      //send email
      to: email,
      subject: "Login Details For Student Note Application",
      text: message,
    });

    res
      .status(200)
      .json({ success: true, verify: "Email is sent to the user" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: "Email could not be sent" });
  }
};

const sendToken = (user, statusCode, res) => {
  //JWT get
  const token = user.getSignedToken();
  const email = user.email;
  const type = user.type;
  const id = user._id;
  const firstName = user.firstName;
  const lastName = user.lastName;
  const dateOfBirth = user.dateOfBirth;
  const mobile = user.mobile;
  const userStatus = user.userStatus;
  const accountType = user.accountType;
  res.status(200).json({
    success: true,
    token,
    id,
    firstName,
    lastName,
    email,
    dateOfBirth,
    mobile,
    userStatus,

    accountType,
  });
};
