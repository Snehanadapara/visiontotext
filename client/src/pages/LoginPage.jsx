import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-hot-toast";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", formData);

      if (response.status === 200 && response.data.user) {
        // ✅ Save email to localStorage after login
        localStorage.setItem("userEmail", response.data.user.email);

        toast.success("Login successful!");
        navigate("/upload");
      }
    } catch (err) {
      if (err.response?.status === 404) {
        toast.error("Email not found. Please register first.");
      } else if (err.response?.status === 401) {
        toast.error("Wrong password. Please try again.");
      } else {
        toast.error("Login failed. Something went wrong.");
      }
    }
  };

  return (
    <>
      <Header />
      <motion.section
        className="max-w-md mx-auto mt-20 mb-20 p-6 border border-gray-200 rounded shadow-sm bg-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-2xl font-semibold text-gray-900 mb-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Login to Vision2Text
        </motion.h1>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
              onChange={handleChange}
              value={formData.password}
            />
            <div className="text-right mt-1">
              <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                Forgot Password? Click here
              </Link>
            </div>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-2 bg-black text-white rounded hover:bg-gray-800 transition"
          >
            Login
          </motion.button>
        </motion.form>

        <motion.p
          className="mt-4 text-center text-sm text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Don’t have an account?{" "}
          <Link to="/register" className="text-black hover:underline">
            Register here
          </Link>
        </motion.p>
      </motion.section>
      <Footer />
    </>
  );
};

export default LoginPage;
