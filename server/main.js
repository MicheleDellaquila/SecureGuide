const express = require("express");
const cors = require("cors");

// routes
const emailRoutes = require('./api/routes/emailRoutes');

// create express app
const app = express();

// set up the cors policy
app.use(cors());

// api
app.use(express.json());
app.use('/api/v1/email', emailRoutes);

app.listen(3000, () => {
  console.log("Server in ascolto sulla porta 3000");
});
