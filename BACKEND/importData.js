require("dotenv").config();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const adminList = require("./data/seed");
const admin = require("./models/adminListModel");

dotenv.config();
const URL = process.env.MONGODB_URL;

//define connection
mongoose.connect(URL, {});

//Assign database connection for a constant variable
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection was successful"); //open connection for one time
});

const importData = async () => {
  try {
    await admin.insertMany(adminList);

    console.log("Data Import Success !");
    process.exit();
  } catch (error) {
    console.error("Error with importing data", error);
    process.exit(1);
  }
};

importData();
