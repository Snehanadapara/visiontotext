import React from "react";
import { Link } from "react-router-dom";
import CustomHeader from "../components/CustomHeader";
import Footer from "../components/Footer";
import { PlugZap, Layers, Database, Zap } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },  
  },
};


const WelcomePage = () => {
  return (
    <>
      <CustomHeader />

      <section className="bg-[#f9f7fd] min-h-screen px-4 py-16">
        {/* MAin body Section */}
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-6"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.h1
            className="text-5xl font-extrabold text-gray-900 leading-tight"
            variants={fadeInUp}
            custom={1}
          >
            Turn Vision into Words with{" "}
            <span className="text-purple-700">AI</span>
          </motion.h1>
          <motion.p
            className="text-gray-600 text-lg"
            variants={fadeInUp}
            custom={2}
          >
            VISION2TEXT generates smart captions for your images instantly.
          </motion.p>
          <motion.div
            className="flex justify-center gap-4 mt-6"
            variants={fadeInUp}
            custom={3}
          >
            <Link
              to="/login"
              className="px-6 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition font-medium"
            >
              Get Started
            </Link>
            <Link
              to="/about"
              className="px-6 py-2 border border-purple-700 text-purple-700 rounded-lg hover:bg-purple-50 transition font-medium"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto">
          {[
            {
              title: "Easy to Use",
              emoji: "💡",
              desc: "Just upload and go. No tech skills needed.",
            },
            {
              title: "Fast & Accurate",
              emoji: "⚡",
              desc: "AI-powered captions generated in seconds.",
            },
            {
              title: "Built for Business",
              emoji: "🛍️",
              desc: "Perfect for e-commerce, inventory, and accessibility.",
            },
          ].map(({ title, emoji, desc }, index) => (
            <motion.div
              key={title}
              className="p-6 rounded-xl border border-gray-200 shadow-md bg-white hover:shadow-lg transition"
              initial="visible"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {emoji} {title}
              </h2>
              <p className="text-gray-600 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Product Categories */}
        <motion.div
          className="text-center mt-24 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-gray-900">Product Categories</h2>
          <p className="text-gray-600 mt-2">
            Our AI is trained to recognize and describe a wide range of electronic products.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 px-4 mb-24">
          {[
            {
              icon: <PlugZap className="w-10 h-10 text-purple-700" />,
              label: "Accessories",
            },
            {
              icon: <Layers className="w-10 h-10 text-purple-700" />,
              label: "Wearables",
            },
            {
              icon: <Database className="w-10 h-10 text-purple-700" />,
              label: "Storage",
            },
            {
              icon: <Zap className="w-10 h-10 text-purple-700" />,
              label: "Gadgets",
            },
          ].map(({ icon, label }, index) => (
            <motion.div
              key={label}
              className="bg-white shadow-md rounded-xl p-6 w-40 flex flex-col items-center hover:shadow-xl transition"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={index + 1}
            >
              {icon}
              <p className="mt-4 font-medium text-gray-900">{label}</p>
            </motion.div>
          ))}
        </div>

      
        <motion.div
          className="bg-white border border-gray-300 shadow rounded-xl p-8 max-w-xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
        >
          <h3 className="text-lg font-semibold text-gray-900">
            Ready to turn product images into perfect descriptions?
          </h3>
          <Link
            to="/register"
            className="mt-4 inline-block px-6 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition font-medium"
          >
            Create An Account to Get Started
          </Link>
        </motion.div>
      </section>

      <Footer />
    </>
  );
};

export default WelcomePage;
