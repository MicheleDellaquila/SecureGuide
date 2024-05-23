const express = require("express");
const cors = require("cors");
require("dotenv").config();

// routes

// create express app
const app = express();

// set up the cors policy
app.use(cors());

// api
app.use(express.json());

app.listen(3001, () => {
  console.log("Server in ascolto sulla porta 3001");
});
