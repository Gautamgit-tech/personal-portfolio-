import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Laptop, Terminal } from 'lucide-react';

const skillsData = [
  {
    title: 'Languages',
    icon: <Code2 size={18} />,
    skills: ['Java', 'JavaScript (ES6+)', 'SQL'],
  },
  {
    title: 'Frontend',
    icon: <Laptop size={18} />,
    skills: ['React.js', 'HTML5', 'CSS3', 'Responsive Design'],
  },
  {
    title: 'Backend',
    icon: <Terminal size={18} />,
    skills: ['Node.js', 'Express.js', 'REST API Design', 'JWT Authentication'],
  },
  {
    title: 'Databases',
    icon: <Database size={18} />,
    skills: ['MongoDB', 'MySQL', 'Data Modeling', 'Query Optimization'],
  },
  {
    title: 'Core CS',
    icon: <Code2 size={18} />,
    skills: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'SDLC'],
  },
  {
    title: 'Tools',
    icon: <Laptop size={18} />,
    skills: ['Git/GitHub', 'Postman', 'VS Code', 'npm'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-block">
      <div className="section-wrap">
        <div className="section-heading">
          <div><div className="section-kicker">03 / Toolbox</div><h2>Skills & technologies</h2></div>
          <p>Languages, frameworks, and engineering fundamentals I work with.</p>
        </div>
        <div className="skills-grid">
        {skillsData.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className="skill-group"
          >
            <div className="skill-group-head"><span className="skill-index">0{index + 1}</span>{category.icon}<h3>{category.title}</h3></div>
            <div className="skill-tags">{category.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
}
