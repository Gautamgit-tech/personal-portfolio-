import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-800 text-white py-6 px-4 text-center"
    >
      <p className="text-xl font-medium">
        &copy; {new Date().getFullYear()} Gautam Kumar. All rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
