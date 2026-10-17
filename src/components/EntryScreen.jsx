import React from "react";
import { ArrowRight, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

const EntryScreen = ({ isLight, onToggleTheme, onEnter }) => (
  <motion.main
    className="entry-screen"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, scale: 1.015 }}
    transition={{ duration: 0.45 }}
  >
    <div className="entry-topline">
      <div className="system-status"><span /> SYSTEM ONLINE <i>•</i> OPEN FOR OPPORTUNITIES</div>
      <button
        type="button"
        className="theme-toggle entry-theme-toggle"
        aria-label={`Switch to ${isLight ? "dark" : "light"} theme`}
        onClick={onToggleTheme}
      >
        {isLight ? <Moon size={19} /> : <Sun size={19} />}
      </button>
    </div>
    <div className="entry-center">
      <motion.div
        className="entry-copy"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.1 }}
      >
        <p className="entry-kicker">SOFTWARE DEVELOPER / PORTFOLIO</p>
        <h1>GAUTAM KUMAR</h1>
        <div className="entry-light-line"><span /></div>
        <p className="entry-specialties">
          Full Stack Developer <i>•</i> MERN Stack <i>•</i> Web Developer
        </p>
        <button className="enter-button" type="button" onClick={onEnter}>
          <span>ENTER PORTFOLIO</span><ArrowRight size={20} />
          <span className="enter-button-orbit" aria-hidden="true">ENTER</span>
        </button>
      </motion.div>
    </div>
    <div className="entry-footer"><span>SCROLL LESS. BUILD MORE.</span><span>PORTFOLIO / 2026</span></div>
  </motion.main>
);

export default EntryScreen;