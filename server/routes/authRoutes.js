const express = require('express');
const router = express.Router();
const { 
  registerUser, 
  loginUser, 
  deleteUser,
  verifyEmail,
  resetPassword
} = require('../Controllers/authController');

// Register Route
router.post('/register', registerUser);

// Login Route
router.post('/login', loginUser);

// ✅ Delete Account Route
router.delete('/delete', deleteUser);

// Verify Email for Password Reset
router.post('/verify-email', verifyEmail);

// Reset Password
router.post('/reset-password', resetPassword);

module.exports = router;