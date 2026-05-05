const express = require('express');
const { generate } = require('../controllers/generateController');

const router = express.Router();

// POST /api/generate
router.post('/generate', generate);

module.exports = router;
