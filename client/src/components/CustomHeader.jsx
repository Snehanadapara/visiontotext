import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg"; // Make sure logo.png is inside src/assets/

const CustomHeader = () => {
  return (
    <header className="w-full shadow-sm bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-3 py-3 flex items-center justify-between">
        
        <div className="flex items-center gap-2">
          <img src={logo} alt="Vision2Text Logo" className="h-40 w-25" />
        </div>

        {/* Nav Links */}
        <nav className="space-x-6 text-xl text-gray-700">
          <Link to="/" className="hover:text-black">Home</Link>
          <Link to="/howitworks" className="hover:text-black">How it Works</Link>
          <Link to="/about" className="hover:text-black">About</Link>
          <Link to="/contact" className="hover:text-black">Contact</Link>
        </nav>

        
        <div className="space-x-4">
          <Link to="/login" className="inline-block px-4 py-1 border rounded text-sm border-gray-400 hover:border-gray-600">
            Login
          </Link>
          <Link to="/register" className="inline-block px-4 py-1 border rounded text-sm border-gray-900 text-white bg-gray-900 hover:bg-black">
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default CustomHeader;
