import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: () => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      type: "spring",
    },
  }),
};

const HowItWorks = () => {
  return (
    <>
      <Header />
      <section className="bg-[#f9f7fd] px-4 py-16 min-h-screen">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900">How VISION2TEXT Works</h1>
          <p className="mt-4 text-gray-600 text-lg">
            Discover the powerful process behind generating smart image captions using AI.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[1, 2, 3].map((step, i) => {
            const titles = ["Upload Image", "AI Analysis", "Generate Caption"];
            const descriptions = [
              "Start by uploading a product or object image from your device through our easy-to-use upload form.",
              "Our AI model processes the image using deep learning to understand objects, patterns, and details.",
              "The system generates a natural language caption that describes your image accurately and instantly.",
            ];
            return (
              <motion.div
                key={step}
                custom={i}
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="text-4xl font-bold text-purple-700 mb-4">{step}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{titles[i]}</h3>
                <p className="text-gray-600 text-sm">{descriptions[i]}</p>
              </motion.div>
            );
          })}
        </div>

      
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Ready to try it yourself?
          </h2>
          <a
            href="/register"
            className="inline-block px-6 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
          >
            Register Now
          </a>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default HowItWorks;
