import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section-block">
      <motion.div
        className="section-wrap"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55 }}
      >
        <div className="section-heading">
          <div><div className="section-kicker">01 / About</div><h2>A little about me</h2></div>
          <p>Curiosity, thoughtful engineering, and a steady appetite for learning.</p>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <p>I'm <strong>Gautam Kumar</strong>, a full stack developer who enjoys turning ideas into interactive web experiences. What began as curiosity has grown into a passion for building useful, well-crafted software.</p>
            <p>At <strong>Digital Dezire</strong>, I work as a <strong>Junior Full Stack Developer</strong> and contribute to real-world projects with the <strong>MERN stack</strong>. Working across responsive interfaces, APIs, and databases has strengthened both my technical skills and my approach to collaboration.</p>
            <p>I keep exploring new tools, refining my UI instincts, and solving DSA challenges while building clean, scalable, user-focused solutions.</p>
          </div>
          <div className="about-facts">
            <div className="fact-row"><span>Role</span><span>Junior Full Stack Developer</span></div>
            <div className="fact-row"><span>Company</span><span>Digital Dezire</span></div>
            <div className="fact-row"><span>Focus</span><span>MERN stack development</span></div>
            <div className="fact-row"><span>Interests</span><span>Web apps · UI · DSA</span></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
