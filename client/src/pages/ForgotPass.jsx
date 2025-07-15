import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-hot-toast";

const ForgotPass = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!email) return toast.error("Please enter your email");

    try {
      const res = await axios.post("http://localhost:5000/api/auth/verify-email", { email });
      if (res.status === 200) {
        toast.success("Email verified. Set a new password.");
        setStep(2);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Error verifying email");
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    if (!newPassword || !confirmNewPassword) {
      return toast.error("Please fill both fields");
    }

    if (newPassword !== confirmNewPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/reset-password", {
        email,
        newPassword,
        confirmNewPassword,
      });

      if (res.status === 200) {
        toast.success("Your password has been reset!");
        setTimeout(() => navigate("/login"), 2500);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Error resetting password");
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
          Reset Your Password
        </motion.h1>

        {step === 1 && (
          <motion.form
            onSubmit={handleEmailSubmit}
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-2 bg-black text-white rounded hover:bg-gray-800 transition"
            >
              Proceed
            </motion.button>
          </motion.form>
        )}

        {step === 2 && (
          <motion.form
            onSubmit={handlePasswordSubmit}
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
              <input
                type="password"
                name="newPassword"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm New Password
              </label>
              <input
                type="password"
                name="confirmNewPassword"
                required
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-2 bg-black text-white rounded hover:bg-gray-800 transition"
            >
              Save Password
            </motion.button>
          </motion.form>
        )}
      </motion.section>
      <Footer />
    </>
  );
};

export default ForgotPass;
