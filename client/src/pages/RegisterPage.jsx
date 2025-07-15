import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = formData;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      toast.error("Please fill out all fields.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    if (!agreed) {
      toast.error("Please agree to the terms and conditions.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/auth/register", formData);
      toast.success("Registration successful!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setTimeout(() => navigate("/login"), 1000); 
    } catch (err) {
      if (err.response?.data?.message === "Email already registered") {
        toast.error("This email is already registered.");
      } else {
        toast.error("Registration failed. Please try again.");
      }
    }
  };

  return (
    <>
      <Header />
      <Toaster position="top-center" reverseOrder={false} />

      <motion.section
        className="max-w-md mx-auto mt-20 mb-20 p-6 border border-gray-200 rounded shadow-sm"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.h1
          className="text-2xl font-semibold text-gray-900 mb-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Create an Account
        </motion.h1>

        <motion.form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              onChange={handleChange}
              value={formData.firstName}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              onChange={handleChange}
              value={formData.lastName}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              onChange={handleChange}
              value={formData.email}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              onChange={handleChange}
              value={formData.password}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              onChange={handleChange}
              value={formData.confirmPassword}
            />
          </div>

          <div className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <label>Show Password</label>
          </div>

          <div className="flex items-start text-sm space-x-2">
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="mt-1"
            />
            <p>
              By clicking here you agree to our{" "}
              <button
                type="button"
                className="text-black underline"
                onClick={() => setShowModal(true)}
              >
                Terms & Conditions
              </button>
              .
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-black text-white rounded hover:bg-gray-800"
          >
            Register
          </button>
        </motion.form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-black hover:underline">
            Login here
          </Link>
        </p>
      </motion.section>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-lg mx-auto shadow-lg relative">
            <h2 className="text-xl font-semibold mb-4">Terms & Conditions</h2>
            <p className="text-sm text-gray-700 h-48 overflow-y-auto">
              By using Vision2Text, you agree not to upload offensive, illegal, or copyrighted content.
              You understand that AI-generated content may not be 100% accurate.
              Vision2Text is not responsible for how descriptions are used.
              We may store uploaded images temporarily for processing.
              Continued use of the service implies agreement to these conditions.
            </p>
            <button
              className="absolute top-2 right-3 text-gray-600 hover:text-black text-xl"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default RegisterPage;
