const { Router } = require('express');

// define the router
const router = Router();

router.post('/', askQuestion);

module.exports = router;