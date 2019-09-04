const express = require('express');

const router = express.Router();

// a router can have middleware that applies only to the router
router.use(express.json());

module.exports = router;