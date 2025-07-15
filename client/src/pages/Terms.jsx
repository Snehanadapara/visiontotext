import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Terms = () => {
  return (
    <>
    <Header/>
    <div className="bg-[#fefefe] min-h-screen px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-10 text-[#292966] text-center">Terms & Conditions</h1>

        <div className="grid gap-6">
          <div className="bg-[#f5f7ff] p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold text-[#292966] mb-2">Usage Policy</h2>
            <p className="text-gray-700 text-sm">Use VISION2TEXT only for ethical and lawful purposes. Abuse, tampering, or redistribution is strictly not allowed.</p>
          </div>

          <div className="bg-[#fff8ec] p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold text-[#a26500] mb-2">Account Responsibilities</h2>
            <p className="text-gray-700 text-sm">You are responsible for protecting your credentials and all activity performed using your account.</p>
          </div>

          <div className="bg-[#f5f7ff] p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold text-[#292966] mb-2">Image Usage</h2>
            <p className="text-gray-700 text-sm">Uploaded images are used only for caption generation and are not stored permanently or shared.</p>
          </div>

          <div className="bg-[#fff8ec] p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold text-[#a26500] mb-2">Changes to Terms</h2>
            <p className="text-gray-700 text-sm">Terms may be updated. Continued use implies agreement to the latest version of these terms.</p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Terms;
