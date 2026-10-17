import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Send } from "lucide-react";

const Contact = () => {
  const sendMessage = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio message from ${formData.get("name")}`);
    const body = encodeURIComponent(`${formData.get("message")}\n\nFrom: ${formData.get("name")} (${formData.get("email")})`);
    window.location.href = `mailto:gautamkumar060606@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-block">
      <motion.div
        className="section-wrap contact-layout"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55 }}
      >
        <div>
          <div className="section-kicker">08 / Contact</div>
          <h2 className="contact-title">Let's build something <span>useful.</span></h2>
          <p className="contact-copy">I'm open to new opportunities, collaborations, and conversations about building for the web.</p>
        </div>
        <div className="contact-column">
          <div className="contact-links">
            <a className="contact-link" href="mailto:gautamkumar060606@gmail.com"><span><Mail size={18} /> gautamkumar060606@gmail.com</span><ArrowUpRight size={17} /></a>
            <a className="contact-link" href="https://github.com/Gautamgit-tech" target="_blank" rel="noopener noreferrer"><span><Github size={18} /> GitHub</span><ArrowUpRight size={17} /></a>
            <a className="contact-link" href="https://www.linkedin.com/in/gautam-kumar-854406290" target="_blank" rel="noopener noreferrer"><span><Linkedin size={18} /> LinkedIn</span><ArrowUpRight size={17} /></a>
          </div>
          <form className="contact-form" onSubmit={sendMessage}>
            <label>Name<input name="name" autoComplete="name" placeholder="Your name" required /></label>
            <label>Email<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
            <label>Message<textarea name="message" rows="4" placeholder="What would you like to build?" required /></label>
            <button type="submit"><Send size={15} /> Send message</button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
