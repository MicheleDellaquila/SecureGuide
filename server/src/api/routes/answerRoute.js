const { Router } = require("express");
const answerController = require("../controllers/answerController");

// define the router
const router = Router();

router.post("/", answerController);

module.exports = router;
