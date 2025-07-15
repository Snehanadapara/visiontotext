import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <>
    <Header/>
    <div className="bg-[#fefefe] min-h-screen px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-10 text-[#292966] text-center">Privacy Policy</h1>

        <div className="grid gap-6">
          <div className="bg-[#f5f7ff] p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold text-[#292966] mb-2">Data Collection</h2>
            <p className="text-gray-700 text-sm">We collect only the data needed to deliver captioning services such as login and uploaded content. No excessive tracking.</p>
          </div>

          <div className="bg-[#fff8ec] p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold text-[#a26500] mb-2">No Third-Party Sharing</h2>
            <p className="text-gray-700 text-sm">Your data is not shared with advertisers or external services. Your privacy is our top priority.</p>
          </div>

          <div className="bg-[#f5f7ff] p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold text-[#292966] mb-2">Cookies</h2>
            <p className="text-gray-700 text-sm">We use simple session cookies for login and user flow. You can disable them via browser settings.</p>
          </div>

          <div className="bg-[#fff8ec] p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold text-[#a26500] mb-2">Your Control</h2>
            <p className="text-gray-700 text-sm">You can request account and data deletion anytime. Transparency and control are in your hands.</p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Privacy;
