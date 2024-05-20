const express = require("express");
const { sendVerificationCode } = require("../controllers/emailController");

// create a new router
const router = express.Router();

// define the routes
router.post("/send-code", sendVerificationCode);

module.exports = router;
