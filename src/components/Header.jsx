import React from 'react';
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-between items-center px-5 md:px-20 py-5 sticky top-0 z-10 bg-[#fcf8e3] backdrop-blur-sm"
    >
      {/* LOGO */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="text-x font-bold text-[25px] text-[#03045E]"
      >
        *FA*
      </motion.div>

      {/* NAV LINKS */}
      <motion.nav
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <ul className="flex space-x-8 text-lg font-medium text-[#3f3f3f]">
          <li><a href="#home" className="hover:text-[#e5cc40]">Home</a></li>
          <li><a href="#about" className="hover:text-[#e5cc40]">About</a></li>
          <li><a href="#contact" className="hover:text-[#e5cc40]">Contact</a></li>
        </ul>
      </motion.nav>

    </motion.header>
  );
};

export default Header;
