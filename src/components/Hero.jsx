import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="section-wrap hero">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="eyebrow">Software Developer <span className="status-dot" /> Open to opportunities</div>
        <h1>
          <span className="hero-greeting">Hi, I'm</span>
          <span className="hero-first-name">Gautam</span>
          <span>Kumar.</span>
        </h1>
        <h2 className="hero-role">
          <Typewriter
            words={[
              'Junior Full Stack Developer',
              'MERN Stack Developer',
              'Building useful web experiences',
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={55}
            deleteSpeed={35}
            delaySpeed={1800}
          />
        </h2>
        <p className="hero-copy">
          I build responsive, interactive web applications and enjoy turning practical ideas into polished products. Currently working as a Junior Full Stack Developer at Digital Dezire, with a focus on the MERN stack.
        </p>
        <div className="hero-actions">
          <a
            href="/GautamNew_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary"
          >
            View resume <ArrowUpRight size={16} />
          </a>
          <a
            href="/GautamNew_resume.pdf"
            download="GautamNew_resume.pdf"
            className="button-secondary"
          >
            Download resume <Download size={15} />
          </a>
          <a href="#projects" className="button-secondary">
            Explore projects <ArrowDown size={15} />
          </a>
        </div>
        <div className="hero-socials">
          <a href="https://github.com/Gautamgit-tech" target="_blank" rel="noopener noreferrer"><Github size={15} /> GitHub</a>
          <a href="https://www.linkedin.com/in/gautam-kumar-854406290" target="_blank" rel="noopener noreferrer"><Linkedin size={15} /> LinkedIn</a>
          <a href="mailto:gautamkumar060606@gmail.com">Email <ArrowUpRight size={13} /></a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="hero-visual developer-art"
      >
        <img
          className="developer-illustration"
          src="/developer-illustration.svg"
          alt="Illustration of a male developer coding at a laptop"
          fetchPriority="high"
        />
      </motion.div>
    </section>
  );
}