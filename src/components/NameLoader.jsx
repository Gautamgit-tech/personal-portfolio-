import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const letters = ["G", "A", "U", "T", "A", "M"];

const NameLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Loader lasts for 4s
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3.5, duration: 0.5 }}
      className="fixed inset-0 flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-black to-purple-900 z-[9999]"
    >
      {/* Outer buffering circle */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        className="relative w-44 h-44 rounded-full border-8 border-t-8 border-gray-700 border-t-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.6)] flex items-center justify-center"
      >
        {/* Inner static name with glowing letters */}
        <div className="flex space-x-2">
          {letters.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                delay: i * 0.2,
              }}
              className="text-3xl md:text-5xl font-extrabold text-white tracking-wide drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
            >
              {char}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-10 text-lg md:text-2xl text-gray-300 tracking-widest"
      >
        <span className="text-purple-400">Loading</span> Portfolio...
      </motion.p>
    </motion.div>
  );
};

export default NameLoader;
