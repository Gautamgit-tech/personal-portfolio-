import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white flex flex-col items-center justify-center px-8 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-md bg-white/60 border border-red-200 shadow-2xl p-12 rounded-3xl max-w-3xl w-full text-center"
      >
        <h2 className="text-6xl font-extrabold mb-10 text-red-600">
          Contact <span className="text-black">Me</span>
        </h2>

        <p className="text-3xl mb-8 text-gray-700 font-medium">
          I'm always open to new opportunities, collaborations, or just a techy chat.
        </p>

        <p className="text-3xl font-semibold mb-2 text-black">📧 Email:</p>
        <p className="text-2xl mb-8 text-gray-700">gautamkumar09630@gmail.com</p>

        <div className="flex justify-center gap-12 mt-10 text-4xl text-red-600">
          <a
            href="https://github.com/Gautamgit-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/gautam-kumar-854406290"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:gautamkumar09630@gmail.com"
            className="hover:text-black transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
