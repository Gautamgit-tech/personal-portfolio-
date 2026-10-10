import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-[110vh] bg-gradient-to-br from-red-100 via-white to-pink-100 text-gray-800 py-24 px-6 flex justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.65 }}
        className="backdrop-blur-md bg-white/60 border border-red-200 shadow-2xl p-12 rounded-3xl max-w-5xl w-full transition duration-500 hover:scale-105"
      >
        <h2 className="text-6xl font-extrabold text-center mb-12 text-red-600 drop-shadow-md">
          About <span className="text-black">Me</span>
        </h2>

        <p className="text-2xl leading-relaxed mb-8 text-justify">
           I'm <strong className="text-red-500">Gautam Kumar</strong>, a passionate full stack developer
          who loves turning ideas into interactive web experiences. My journey into tech started with curiosity
          and turned into a full-blown passion for modern web development.
        </p>

        <p className="text-2xl leading-relaxed mb-8 text-justify">
          I recently joined <strong>Digital Dezire</strong> as a
          <strong className="text-red-500"> Junior Full Stack Developer</strong>, where I contributed to real-world
          projects using the <strong>MERN stack</strong>. From building responsive UIs to working with APIs and databases,
          this role sharpened my skills in frontend and backend development and taught me the power of collaboration.
        </p>

        <p className="text-2xl leading-relaxed text-justify">
          I enjoy learning new tools, exploring cutting-edge tech, and creating solutions that are clean,
          scalable, and user-focused. When I'm not coding, I dive into tech blogs, UI design, or solve DSA challenges.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
