import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

const DescriptionPage = () => {
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [productName, setProductName] = useState("");
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const storedImage = localStorage.getItem("uploadedImage");
    const storedDescription = localStorage.getItem("generatedDescription");
    const storedProductName = localStorage.getItem("productName");

    if (storedImage) setImage(storedImage);
    if (storedDescription) setDescription(storedDescription);
    if (storedProductName) setProductName(storedProductName);
  }, []);

  const handleCopy = () => {
    if (!description) return;
    navigator.clipboard.writeText(description).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    });
  };

  return (
    <>
      <MainHeader />
      <div className="max-w-4xl mx-auto px-4 sm:px-8 mt-16 mb-24 relative">
        <motion.div
          className="grid grid-cols-1 gap-10"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.div
            className="w-full bg-white rounded-2xl shadow-md p-10 flex flex-col items-center justify-center"
            variants={fadeInUp}
            custom={1}
          >
            <h2 className="text-3xl font-bold text-purple-800 mb-4">📝 Generated Description</h2>
            <p className="text-gray-600 mb-6">
              Here is your AI-generated product description based on the uploaded image.
            </p>

            {image && (
              <div className="mt-4 w-64 h-64 relative rounded-xl border overflow-hidden">
                <img
                  src={image}
                  alt="Uploaded Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {productName && (
              <p className="mt-4 text-sm text-purple-700">
                Product: <span className="font-semibold">{productName}</span>
              </p>
            )}

            {description && (
              <div className="mt-6 bg-purple-50 border border-purple-200 p-6 rounded-xl text-gray-800 w-full relative">
                <p className="text-lg leading-relaxed whitespace-pre-line">{description}</p>
                <button
                  onClick={handleCopy}
                  className="mt-4 px-5 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition"
                >
                  Copy Description
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* Toast */}
        {showToast && (
          <div
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-purple-700 text-white px-6 py-3 rounded-lg shadow-lg z-50
            animate-fadeInUp"
            style={{ animationDuration: "0.5s" }}
          >
            Thank you for choosing VISION2TEXT! Your description is copied successfully.
          </div>
        )}
      </div>
      <Footer />

      {/* Simple fadeInUp animation for toast */}
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default DescriptionPage;
