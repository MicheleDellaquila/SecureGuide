const express = require("express");
const cors = require("cors");
require("dotenv").config();

// routes
const emailRoutes = require("./src/api/routes/emailRoutes");

// create express app
const app = express();

// set up the cors policy
app.use(cors());

// api
app.use(express.json());
app.use("/api/v1/email", emailRoutes);

app.listen(3001, () => {
  console.log("Server in ascolto sulla porta 3001");
});
