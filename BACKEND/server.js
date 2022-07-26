const express = require("express"); //import dependencies
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

//configure the .env file
require("dotenv").config();

const URL = process.env.MONGODB_URL;

//define connection
mongoose.connect(URL, {});

//Assign database connection for a constant variable
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection was successful"); //open connection for one time
});

const app = express();

//Define a port for server
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is up and running on port number ${PORT}`);
});

//use routes
app.use("/user", require("./routes/auth"));

//note routes

app.use("/note", require("./routes/noteRoute"));
