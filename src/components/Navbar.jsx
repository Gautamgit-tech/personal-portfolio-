import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900 via-indigo-900 to-gray-900 text-white py-6 px-10 shadow-lg"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <motion.h1
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 drop-shadow-lg tracking-wide"
>
  Namaste! 
</motion.h1>
 

        {/* Navigation Links */}
        <ul className="flex space-x-12 text-2xl font-bold">
          <li>
            <a
              href="#about"
              className="hover:text-cyan-300 transition-all duration-300 ease-in-out"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-cyan-300 transition-all duration-300 ease-in-out"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-cyan-300 transition-all duration-300 ease-in-out"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-cyan-300 transition-all duration-300 ease-in-out"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
