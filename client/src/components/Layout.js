import React from 'react';
import MainHeader from './MainHeader'; 
import Footer from './Footer'; 

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <MainHeader />
      <main className="px-4 py-6 sm:px-8">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
