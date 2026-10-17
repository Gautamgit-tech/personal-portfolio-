// src/App.js
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import EntryScreen from "./components/EntryScreen";
import Journey from "./components/Journey";
import NetworkBackground from "./components/NetworkBackground";
import "./index.css";

function App() {
  const [entered, setEntered] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    if (entered) window.scrollTo(0, 0);
  }, [entered]);

  const enterPortfolio = () => {
    setEntered(true);
  };

  return (
    <div className="app-root" data-theme={isLight ? "light" : "dark"}>
      <NetworkBackground />
      <AnimatePresence mode="wait">
        {!entered ? (
          <EntryScreen
            key="entry"
            isLight={isLight}
            onToggleTheme={() => setIsLight((current) => !current)}
            onEnter={enterPortfolio}
          />
        ) : (
          <motion.div
            key="portfolio"
            className="portfolio-content"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
          >
            <Navbar
              isLight={isLight}
              onToggleTheme={() => setIsLight((current) => !current)}
            />
            <main className="site-shell">
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Journey />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
