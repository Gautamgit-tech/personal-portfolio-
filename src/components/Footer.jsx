import React from "react";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="section-wrap footer-inner">
        <span>© {new Date().getFullYear()} Gautam Kumar</span>
        <span>Designed & built with care</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
};

export default Footer;
