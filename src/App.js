// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero"; // ✅ Fixed import
import ScrollToTop from "react-scroll-to-top";
import NameLoader from "./components/NameLoader";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />         {/* ✅ Fixed usage */}
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <NameLoader variant={3}/>
    </>
  );
}
<ScrollToTop smooth color="#f43f5e" />

export default App;
