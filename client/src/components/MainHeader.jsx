import React, { useState } from 'react';
import { Menu, UserCircle, LogOut, Home, Settings, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const MainHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    navigate('/login');
  };

  const menuItems = [
    { icon: <Home className="w-4 h-4" />, text: 'Home', path: '/upload' },
    { icon: <FileText className="w-4 h-4" />, text: 'My Descriptions', path: '/my-descriptions' },
    { icon: <Settings className="w-4 h-4" />, text: 'Settings', path: '/settings' },
    { icon: <LogOut className="w-4 h-4" />, text: 'Logout', action: handleLogout },
  ];

  const handleNavigation = (path, action) => {
    setMenuOpen(false);
    if (action) {
      action();
    } else {
      navigate(path);
    }
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-3 flex justify-between items-center relative z-20">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <Menu 
            className="w-7 h-7 text-purple-700 cursor-pointer hover:scale-110 transition-transform" 
            onClick={() => setMenuOpen(!menuOpen)} 
          />
          <span className="text-xl font-extrabold text-purple-700 tracking-wide">VISION2TEXT</span>
        </div>

        {/* Right Section */}
        <div className="relative">
          <UserCircle 
            className="w-8 h-8 text-purple-700 cursor-pointer hover:text-purple-900 transition-transform hover:scale-110" 
            onClick={() => setDropdownOpen(!dropdownOpen)} 
          />
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 shadow-lg rounded-xl overflow-hidden z-30"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 px-4 py-2 text-purple-700 font-medium hover:bg-purple-50 text-sm"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Dark overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-30 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            {/* Sidebar */}
            <motion.div
              className="fixed top-0 left-0 h-full w-64 bg-white shadow-xl border-r border-gray-200 z-20 p-5 flex flex-col gap-4"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <h2 className="text-xl font-bold text-purple-700 mb-4">Menu</h2>
              {menuItems.map((item, idx) => (
                <button
                  key={idx}
                  className="flex items-center gap-3 text-purple-700 font-medium text-base hover:bg-purple-50 px-3 py-2 rounded-lg text-left transition-colors"
                  onClick={() => handleNavigation(item.path, item.action)}
                >
                  {item.icon}
                  {item.text}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MainHeader;
