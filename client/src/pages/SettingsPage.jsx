import React, { useState } from "react";
import { motion } from "framer-motion";
import { LogOut, HelpCircle, Sun, Moon, Edit, Trash2 } from "lucide-react";
import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"; 
import { getUserEmail } from "../utils/auth";

const userEmail = getUserEmail();


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const SettingsPage = () => {
  const [firstName, setFirstName] = useState("Sneha");
  const [lastName, setLastName] = useState("Nadapara");
  const [email, setEmail] = useState("sneha@example.com");
  const [darkMode, setDarkMode] = useState(false);
  const [showAccountPopup, setShowAccountPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const [newEmail, setNewEmail] = useState(email);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    window.location.href = "/login";
  };

  const handleSave = () => {
    if (newFirstName && newLastName && newEmail && currentPassword && newPassword && confirmPassword) {
      if (newPassword !== confirmPassword) {
        toast.error("Passwords do not match.");
      } else {
        toast.success("Successfully updated name, email, and password.");
        setShowAccountPopup(false);
      }
    } else {
      toast.error("All fields must be filled.");
    }
  };

  const handleDeleteAccount = async () => {
    try {
      // Replace with actual user ID or token-based logic
      await axios.delete("/api/users/delete", {
        data: { email }, // or user ID from token
      });
      toast.success("Your account is successfully deleted! Thanks for using Vision2Text. Visit again.");
      localStorage.removeItem("userToken");
      setTimeout(() => {
        window.location.href = "/"; // Redirect to home page
      }, 2000);
    } catch (err) {
      toast.error("Failed to delete account. Try again.");
    }
  };

  return (
    <>
      <MainHeader />
      <div className="max-w-4xl mx-auto mt-5 mb-5 py-12 px-4">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Settings Panel */}
          <motion.div
            className="bg-white rounded-2xl shadow-md p-6 mb-8"
            variants={fadeInUp}
            custom={1}
          >
            <h3 className="text-xl font-semibold text-[#292966] mb-4">Settings</h3>
            <div className="space-y-4">
              <button
                className="flex items-center gap-2 text-[#292966] hover:bg-[#f0f0f0] py-2 px-3 rounded-lg w-full text-left"
                onClick={() => setShowAccountPopup(true)}
              >
                <Edit size={18} /> Account Settings
              </button>
              <button
                className="flex items-center gap-2 text-[#292966] hover:bg-[#f0f0f0] py-2 px-3 rounded-lg w-full text-left"
                onClick={toggleTheme}
              >
                {darkMode ? <Moon size={18} /> : <Sun size={18} />}
                {darkMode ? "Dark Mode" : "Light Mode"}
              </button>
            </div>
          </motion.div>

          {/* Account Settings Popup */}
          {showAccountPopup && (
            <motion.div
              className="fixed inset-0 bg-gray-500 bg-opacity-40 z-50 flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="bg-white w-full md:w-96 p-6 rounded-xl shadow-lg"
                variants={fadeInUp}
                custom={2}
              >
                <h3 className="text-xl font-semibold text-[#292966] mb-4">Account Settings</h3>
                <input type="text" className="border rounded-lg p-2 w-full mb-4" value={newFirstName} onChange={(e) => setNewFirstName(e.target.value)} placeholder="First Name" />
                <input type="text" className="border rounded-lg p-2 w-full mb-4" value={newLastName} onChange={(e) => setNewLastName(e.target.value)} placeholder="Last Name" />
                <input type="email" className="border rounded-lg p-2 w-full mb-4" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} placeholder="Email Address" />
                <h4 className="text-lg font-semibold text-[#292966] mt-6 mb-2">Change Password</h4>
                <input type="password" className="border rounded-lg p-2 w-full mb-4" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} placeholder="Current Password" />
                <input type="password" className="border rounded-lg p-2 w-full mb-4" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="New Password" />
                <input type="password" className="border rounded-lg p-2 w-full mb-4" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm New Password" />
                <div className="flex gap-4 mt-4">
                  <Button className="bg-[#292966] text-white hover:bg-[#4444aa]" onClick={handleSave}>OK</Button>
                  <Button className="border border-[#292966] text-[#292966] hover:bg-[#f0f0f0]" onClick={() => setShowAccountPopup(false)}>Cancel</Button>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Delete Account Section */}
          <motion.div
            className="bg-white rounded-2xl shadow-md p-6 mb-8"
            variants={fadeInUp}
            custom={3}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-xl font-semibold text-[#292966] mb-4">Delete Account</h3>
            <button
              className="flex items-center gap-2 text-red-600 hover:bg-red-100 py-2 px-3 rounded-lg w-full text-left"
              onClick={() => setShowDeletePopup(true)}
            >
              <Trash2 size={18} /> Delete My Account
            </button>
          </motion.div>

          {/* Delete Confirmation Popup */}
          {showDeletePopup && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div className="bg-white w-full md:w-96 p-6 rounded-xl shadow-xl">
                <h3 className="text-lg font-bold text-red-600 mb-4">Are you sure?</h3>
                <p className="text-gray-700 mb-6">
                  You are about to delete your account. <br />
                  <strong>This action cannot be undone.</strong>
                </p>
                <div className="flex justify-end gap-4">
                  <Button className="bg-red-600 text-white hover:bg-red-700" onClick={handleDeleteAccount}>Delete</Button>
                  <Button className="border border-gray-300 text-gray-700 hover:bg-gray-100" onClick={() => setShowDeletePopup(false)}>Cancel</Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Help Section */}
        <motion.div
          className="bg-white rounded-2xl shadow-md p-6 mb-8"
          variants={fadeInUp}
          custom={4}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-xl font-semibold text-[#292966] mb-4">Help & Support</h3>
          <div className="flex items-center gap-3">
            <HelpCircle className="text-[#292966]" />
            <span className="text-gray-700">
              Need help? Contact us at supportvision2text@gmail.com
            </span>
          </div>
        </motion.div>

        {/* Logout */}
        <motion.div
          className="text-center"
          variants={fadeInUp}
          custom={5}
          initial="hidden"
          animate="visible"
        >
          <Button
            className="bg-[#292966] text-white hover:bg-[#4444aa] px-5 py-2 rounded-lg flex items-center gap-2"
            onClick={handleLogout}
          >          
            <span>Logout</span>
          </Button>
        </motion.div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default SettingsPage;
