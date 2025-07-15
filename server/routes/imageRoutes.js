const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
// Make sure this path is correct - adjust if your controller is in a different directory
const imageController = require('../Controllers/imageController');

// Set up multer for file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Make sure this directory exists
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

// Define file filter for multer
const fileFilter = (req, file, cb) => {
  // Accept only images
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Not an image! Please upload only images.'), false);
  }
};

// Configure multer
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB file size limit
  },
  fileFilter: fileFilter
});

// Debug route to test if imageRoutes is properly connected
router.get('/test-image-routes', (req, res) => {
  res.json({ message: 'Image routes connected successfully' });
});

// Route for uploading image and generating description
// Important: This now becomes /api/generate-description when mounted in index.js
router.post('/generate-description', upload.single('image'), (req, res, next) => {
  console.log('Request received at /generate-description');
  console.log('Request body:', req.body);
  console.log('Request file:', req.file ? `File ${req.file.originalname} received` : 'No file received');
  
  // Pass to controller
  imageController.uploadImageAndGenerateDescription(req, res, next);
});

module.exports = router;