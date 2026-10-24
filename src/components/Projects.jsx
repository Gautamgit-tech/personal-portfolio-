import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "Job Portal Web Application",
    label: "MERN / WEB APP",
    description: "A two-sided job portal for recruiters and job seekers, with role-based JWT authentication, job search and application tracking, and resume uploads.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "https://github.com/Gautamgit-tech/Job-Portal",
  },
  {
    title: "Online Quiz Platform",
    label: "MERN / WEB APP",
    description: "A quiz platform with admin and user dashboards, timed quizzes, automatic scoring, and MongoDB-backed performance history.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Gautamgit-tech/online-quiz-platform",
  },
  {
    title: "Paradise Nursery",
    label: "REACT / E-COMMERCE",
    description: "An online plant shop with category-based product browsing and a shopping cart with quantity controls and live totals.",
    tech: ["React", "Redux Toolkit", "JavaScript", "CSS"],
    github: "https://github.com/Gautamgit-tech/-paradise-nursery",
  },
  {
  title: "HB+ Team Portal (Google Auth)",
  label: "REACT NATIVE / FIREBASE",
  description: "Cross-platform portal with Google OAuth restricted to one company domain. Protected routes, Admin/User roles and Firestore security rules. Non-company accounts see 'Access restricted' by design.",
  tech: ["React Native", "Expo", "Firebase Auth", "Firestore"],
  github: "https://github.com/Gautamgit-tech/hbplus-auth",
  live: "https://hbplus-auth-gautam.netlify.app",
  },
  {
    title: "Online Course App",
    label: "PYTHON / DJANGO",
    description: "A Django course platform where learners enroll in courses, take lesson-based exams, and receive an instant score and pass/fail result.",
    tech: ["Python", "Django", "HTML"],
    github: "https://github.com/Gautamgit-tech/online-course-app",
  },
  {
    title: "AI Chatbot",
    label: "JAVASCRIPT / CHATBOT",
    description: "A JavaScript-based chatbot project.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Gautamgit-tech/AI-chatbot",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-block projects-section">
      <div className="section-wrap">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          <div><div className="section-kicker">02 / Selected work</div><h2>Projects</h2></div>
          <p>Full stack, frontend, and learning projects built through practical problem-solving.</p>
        </motion.div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.42, delay: index * 0.06 }}
            >
              <div className={`project-art project-art-${index + 1}`}>
                <div className="project-art-top"><span>{project.label}</span><span>0{index + 1}</span></div>
                <div className="project-art-title">{project.title}</div>
                <div className="project-art-tech">{project.tech.slice(0, 4).join(" · ")}</div>
                <div className="project-art-orbit" />
              </div>
              <div className="project-card-body">
                <div className="project-card-meta"><span>PROJECT 0{index + 1}</span><span>PERSONAL WORK</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
                <div className="project-card-actions">
                  {[
                    {
                      href: project.github,
                      label: "View code",
                      ariaLabel: `Open ${project.title} GitHub repository`,
                      icon: <Github size={16} />,
                    },
                    ...(project.live
                      ? [{
                          href: project.live,
                          label: "Live demo",
                          ariaLabel: `Open ${project.title} live demo`,
                        }]
                      : []),
                  ].map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.ariaLabel}
                    >
                      {link.icon} {link.label} <ArrowUpRight size={14} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
