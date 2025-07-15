require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Routes
const authRoutes = require('./routes/authRoutes');
const descriptionRoutes = require('./routes/descriptionRoutes');
const imageRoutes = require('./routes/imageRoutes'); // Optional: keep if needed

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' })); // Increased to handle base64 image
app.use(bodyParser.urlencoded({ extended: true }));

// Route Handlers
app.use('/api/auth', authRoutes);
app.use('/api/description', descriptionRoutes);
app.use('/api/image', imageRoutes); // Optional route for raw image handling

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
