const axios = require('axios');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// ✅ Register User
const registerUser = async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: "Please fill out all fields." });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match!" });
  }

  try {
    const response = await axios.get(
      `https://emailvalidation.abstractapi.com/v1/?api_key=${process.env.EMAIL_VERIFY_API_KEY}&email=${email}`
    );

    const { is_valid_format, is_smtp_valid } = response.data;

    if (!is_valid_format.value || !is_smtp_valid.value) {
      return res.status(400).json({ message: "E-mail does not exist! Please enter a valid email." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return res.status(201).json({ message: "Registration successful!" });
  } catch (error) {
    console.error("Registration Error:", error.message);
    return res.status(500).json({ message: "Server error. Please try again later." });
  }
};

// ✅ Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    return res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error("Login Error:", error.message);
    return res.status(500).json({ message: "Server error" });
  }
};

// ✅ Delete User
const deleteUser = async (req, res) => {
  const { email } = req.body;

  try {
    const deletedUser = await User.findOneAndDelete({ email });

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "Account successfully deleted" });
  } catch (error) {
    console.error("Delete Error:", error.message);
    return res.status(500).json({ message: "Server error" });
  }
};

// ✅ Forgot Password Step 1: Verify Email
const verifyEmail = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "Email not found" });

    return res.status(200).json({ message: "Email verified" });
  } catch (error) {
    console.error("Verify Email Error:", error.message);
    return res.status(500).json({ message: "Server error" });
  }
};

// ✅ Forgot Password Step 2: Reset Password
const resetPassword = async (req, res) => {
  const { email, newPassword, confirmNewPassword } = req.body;

  if (!newPassword || !confirmNewPassword) {
    return res.status(400).json({ message: "Please enter both password fields." });
  }

  if (newPassword !== confirmNewPassword) {
    return res.status(400).json({ message: "Passwords do not match." });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Reset Password Error:", error.message);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  registerUser,
  loginUser,
  deleteUser,
  verifyEmail,
  resetPassword,
};
