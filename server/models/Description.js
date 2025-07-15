const mongoose = require('mongoose');

const descriptionSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
  },
  image: {
    type: String, // base64 string or URL
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Description = mongoose.model('Description', descriptionSchema);

module.exports = Description;
