import React, { useState } from "react";
import { FileText, Menu, Moon, Sun, X } from "lucide-react";

const Navbar = ({ isLight, onToggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="nav-inner" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-name">PORTFOLIO</span>
        </a>
        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
        <div className={`nav-links${menuOpen ? " is-open" : ""}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#certifications" onClick={closeMenu}>Certifications</a>
          <a href="#achievements" onClick={closeMenu}>Achievements</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
        
        <button
          type="button"
          className="theme-toggle nav-theme-toggle"
          aria-label={`Switch to ${isLight ? "dark" : "light"} theme`}
          onClick={onToggleTheme}
        >
          {isLight ? <Moon size={17} /> : <Sun size={17} />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
