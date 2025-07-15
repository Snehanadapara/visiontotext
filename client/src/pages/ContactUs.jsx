import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Header from "../components/Header";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const ContactUs = () => {
  return (
    <>
      <Header />
      <section className="min-h-screen bg-[#f9f7fd] px-4 py-16">
        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">Contact Us</h1>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Have a question, suggestion, or collaboration idea? We'd love to hear from you!
          </p>

          {/* Box 1: Sales & Custom Use */}
          <div className="bg-[#F3E8FF] p-6 rounded-xl shadow-md mb-8">
            <h2 className="font-semibold text-xl mb-2 text-gray-800">📩 Sales & Custom Use</h2>
            <p className="text-gray-700 text-base">
              Are you a retailer, online seller, or business looking to generate high-quality image descriptions at scale? 
              Contact us for tailored solutions and partnerships. We’d love to design VISION2TEXT for your unique needs!
            </p>
            <p className="mt-3 font-medium text-indigo-600">salesvision2text@gmail.com</p>
          </div>

          {/* Box 2: Suggestions & Feedback */}
          <div className="bg-[#FFF7E6] p-6 rounded-xl shadow-md mb-8">
            <h2 className="font-semibold text-xl mb-2 text-gray-800">💡 Suggestions & Feedback</h2>
            <p className="text-gray-700 text-base">
              Got an idea, feature request, or noticed something off? We truly value your feedback to make VISION2TEXT smarter and better.
            </p>
            <p className="mt-3 font-medium text-yellow-700">supportvision2text@gmail.com</p>
          </div>

          {/* Box 3: Collaboration & Media */}
          <div className="bg-[#F3E8FF] p-6 rounded-xl shadow-md mb-8">
            <h2 className="font-semibold text-xl mb-2 text-gray-800">🤝 Collaboration & Media</h2>
            <p className="text-gray-700 text-base">
              Interested in collaborating, writing about us, or exploring academic/research partnerships?
              Reach out — we’re always open to meaningful connections.
            </p>
            <p className="mt-3 font-medium text-indigo-600">collabvision2text@gmail.com</p>
          </div>

          {/* Box 4: Location */}
          <div className="bg-[#FFF7E6] p-6 rounded-xl shadow-md mb-8">
            <h2 className="font-semibold text-xl mb-2 text-gray-800">📍 Location</h2>
            <p className="text-gray-700 text-base">Surat, Gujarat, India</p>
          </div>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
