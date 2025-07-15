import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <Header />
      <section className="bg-gradient-to-b from-[#f5f3ff] to-white px-6 py-20 min-h-screen">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            What is VISION2TEXT?
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Revolutionizing how electronic product images are described — intelligently, instantly, and effortlessly.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "🎯 Our Mission",
              desc: "We simplify product cataloging by generating clear, accurate descriptions for electronics from images, using AI-powered vision tools.",
              border: "border-purple-500",
            },
            {
              title: "🧠 Smart AI Engine",
              desc: "Our model is trained to recognize wearables, accessories, gadgets, and more — turning visuals into ready-to-use captions.",
              border: "border-indigo-500",
            },
            {
              title: "🚀 2025 & Growth",
              desc: "Born in 2025, VISION2TEXT is already helping small electronics businesses scale fast with automation and global reach.",
              border: "border-pink-500",
            },
          ].map(({ title, desc, border }, index) => (
            <motion.div
              key={title}
              className={`bg-white shadow-xl rounded-2xl p-6 border-t-4 ${border} hover:scale-105 transition duration-300`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-3">{title}</h2>
              <p className="text-gray-600 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Why It Matters</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            In a world full of products, the right words matter. Whether you're listing items, improving accessibility, or saving time — VISION2TEXT helps you stay ahead.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <a
            href="/register"
            className="px-8 py-3 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition"
          >
            Try Vision2Text Now
          </a>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default About;
