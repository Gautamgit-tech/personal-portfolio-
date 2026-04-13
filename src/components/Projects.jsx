import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern React-based personal portfolio to showcase my projects, skills, and career journey.",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    github: "",
    demo: "",
  },
  {
    title: "Weather App",
    description: "Live weather updates with OpenWeatherMap API using JavaScript and clean UI design.",
    tech: ["JavaScript", "API", "CSS"],
    github: "",
    demo: "",
  },
  {
    title: "Banking UI Clone",
    description: "UI clone of Central Bank of India with animations and interactive design using vanilla JS.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "",
    demo: "",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-16 tracking-wider"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 shadow-xl hover:scale-[1.02] transition-all duration-300"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-3xl font-bold text-pink-400 mb-3">{project.title}</h3>
              <p className="text-lg mb-4 text-gray-300">{project.description}</p>

              <div className="flex flex-wrap gap-3 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-5 text-2xl text-pink-400">
                <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-white">
                  <FaGithub />
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="hover:text-white">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
