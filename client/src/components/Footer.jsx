import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FFFFFF] border-t border-gray-200 pt-10 pb-6 px-4">
      <div className="max-w-7xl mx-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-gray-700">
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/about" className="hover:text-[#292966]">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-[#292966]">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Legal</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/terms" className="hover:text-[#292966]">Terms</Link></li>
            <li><Link to="/privacy" className="hover:text-[#292966]">Privacy</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" aria-label="Twitter" className="hover:text-[#292966]">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-[#292966]">
              <i className="fab fa-facebook" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[#292966]">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t pt-4 text-center text-sm text-gray-500">
        &copy; {currentYear} VISION2TEXT. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
