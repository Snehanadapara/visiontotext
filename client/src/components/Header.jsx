import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpeg'; 

const Header = () => {
  const location = useLocation();
  const isWelcomePage = location.pathname === "/";

  return (
    <header className="w-full shadow-sm bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo on the left */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Vision2Text Logo" className="h-40 w-25" />
        </Link>

        {/* Navigation Links */}
        <nav className="space-x-6 text-xl text-gray-700">
          <Link to="/" className="hover:text-black">Home</Link>
          <Link to="/howitworks" className="hover:text-black">How it Works</Link>
          <Link to="/about" className="hover:text-black">About</Link>
          <Link to="/contact" className="hover:text-black">Contact</Link>
          
         
        </nav>
      </div>
    </header>
  );
};

export default Header;
