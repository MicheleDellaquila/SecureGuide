const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: ".env.local" });

// routes
const answerRoute = require("./src/api/routes/answerRoute");

// create express app
const app = express();

// set up the cors policy and the json parser
app.use(cors());
app.use(express.json());

// api
app.use("/api/v1/answer", answerRoute);

app.listen(3001, () => {
  console.log("Server in ascolto sulla porta 3001");
});
