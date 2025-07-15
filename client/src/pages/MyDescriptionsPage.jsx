import React, { useEffect, useState } from "react";
import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
// import axios from "axios";
// import { getUserEmail } from "../utils/auth";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const MyDescriptionsPage = () => {
  const [myDescriptions, setMyDescriptions] = useState([]);

  useEffect(() => {
    // === Load data from localStorage ===
    const localData = localStorage.getItem("myDescriptions");
    if (localData) {
      setMyDescriptions(JSON.parse(localData));
    }

    // === Original backend logic (commented) ===
    /*
    const fetchDescriptions = async () => {
      try {
        const email = getUserEmail();
        const response = await axios.get(
          `http://localhost:5000/api/descriptions/${email}`
        );
        setMyDescriptions(response.data || []);
      } catch (error) {
        console.error("Error fetching descriptions:", error);
      }
    };

    fetchDescriptions();
    */
  }, []);

  // === Delete handler ===
  const handleDelete = (indexToDelete) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this description?");
    if (confirmDelete) {
      const updatedDescriptions = myDescriptions.filter((_, index) => index !== indexToDelete);
      setMyDescriptions(updatedDescriptions);
      localStorage.setItem("myDescriptions", JSON.stringify(updatedDescriptions));
    }
  };

  return (
    <>
      <MainHeader />
      <div className="max-w-6xl mx-auto px-4 sm:px-8 mt-16 mb-24">
        <motion.div
          className="text-center mb-10"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold text-purple-800 mb-2">
            🗂️ My Descriptions
          </h2>
          <p className="text-gray-600">All the images and descriptions you’ve generated so far.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {myDescriptions.length > 0 ? (
            myDescriptions.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center justify-between p-4 border border-gray-200"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                custom={index}
              >
                <img
                  src={item.image}
                  alt={`Uploaded ${index}`}
                  className="w-full h-52 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-700 text-sm mb-4">{item.description}</p>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-600 border border-red-500 px-4 py-1 rounded-md hover:bg-red-50 text-sm transition duration-200"
                >
                  Delete Description
                </button>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              No descriptions found. Upload an image to generate one!
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyDescriptionsPage;
