import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header />
      <main className="px-4 py-6 sm:px-8">{children}</main>
      <footer className="text-center text-sm text-gray-500 py-6 border-t border-gray-200">
        © {new Date().getFullYear()} Vision2Text. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
