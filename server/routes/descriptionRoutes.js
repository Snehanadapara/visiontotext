const express = require('express');
const router = express.Router();
const descriptionController = require('../Controllers/descriptionController');

// Route to retrieve saved descriptions by user
router.get('/get-descriptions', descriptionController.getDescriptionsByUser);

module.exports = router;