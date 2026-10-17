import React from "react";
import { motion } from "framer-motion";
import { Award, Code2, Database, Laptop, Terminal } from "lucide-react";

const education = [
  {
    years: "2023 – 2027",
    status: "ACTIVE",
    degree: "Bachelor of Engineering — Computer Science Engineering",
    school: "Chandigarh University",
    description: "CGPA: 7.55 · Focused on Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks, software development, and practical projects.",
  },
  {
    years: "2022 – 2023",
    status: "COMPLETED",
    degree: "Intermediate — CBSE",
    school: "Oxford Senior Secondary School",
    description: "Built a strong foundation in computer science and core academic subjects.",
  },
  {
    years: "2020 – 2021",
    status: "COMPLETED",
    degree: "Matriculation — CBSE",
    school: "Oxford Senior Secondary School",
    description: "Completed secondary education with a strong academic foundation.",
  },
];

const focusCards = [
  { title: "Languages", icon: <Code2 size={18} />, skills: "Java · JavaScript (ES6+) · SQL" },
  { title: "Frontend", icon: <Laptop size={18} />, skills: "React.js · HTML5 · CSS3 · Responsive Design" },
  { title: "Backend", icon: <Terminal size={18} />, skills: "Node.js · Express.js · REST API Design · JWT Authentication" },
  { title: "Databases", icon: <Database size={18} />, skills: "MongoDB · MySQL · Data Modeling · Query Optimization" },
  { title: "Core CS", icon: <Code2 size={18} />, skills: "Data Structures & Algorithms · OOP · DBMS · Operating Systems · SDLC" },
  { title: "Tools", icon: <Laptop size={18} />, skills: "Git/GitHub · Postman · VS Code · npm" },
];

const achievements = [
  {
    eyebrow: "CYBERPEACE FOUNDATION",
    badge: "140 / 150",
    title: "First Responders and Myth Busters Induction Training",
    organization: "CyberPeace Initiative · Certificate of Completion",
    description: "Completed a 10-hour training program covering misinformation, AI-generated deepfakes, cyber harms, and cybersecurity.",
    date: "06-11-2025",
    icon: <Award size={18} />,
  },
  {
    eyebrow: "NPTEL",
    badge: "ELITE MEDAL",
    title: "Cloud Computing",
    organization: "NPTEL · Elite Medal",
    description: "Recognized with an Elite Medal for performance in the NPTEL Cloud Computing course.",
    date: "",
    icon: <Award size={18} />,
  },
];
const Journey = () => (
  <>
    <section id="education" className="section-block education-section">
      <div className="section-wrap">
        <div className="section-heading">
          <div><div className="section-kicker">05 / Education</div><h2>Education</h2></div>
          <p>Academic background and formal study.</p>
        </div>
        <div className="education-grid">
          {education.map((item, index) => (
            <motion.article
              className="education-card"
              key={item.degree}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="education-card-top"><span>{item.years}</span><span>{item.status}</span></div>
              <h3>{item.degree}</h3>
              <div className="education-school">{item.school}</div>
              <p>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
    <section id="certifications" className="section-block certifications-section">
      <div className="section-wrap">
        <div className="section-heading">
          <div><div className="section-kicker">06 / Learning</div><h2>Certifications & training</h2></div>
          <p>Technical areas from the skills shared for this portfolio.</p>
        </div>
        <div className="certificate-marquee" aria-label="Technical learning areas">
          <div className="certificate-track">
            {[0, 1].map((group) => (
              <div className="certificate-group" key={group} aria-hidden={group === 1}>
                {focusCards.map((card, index) => (
                  <article
                    className="certificate-card"
                    key={card.title}
                    tabIndex={group === 0 ? 0 : -1}
                  >
                    <div className="certificate-card-top"><span>{card.icon} LEARNING AREA</span><span>0{index + 1}</span></div>
                    <h3>{card.title}</h3>
                    <p>{card.skills}</p>
                    <div className="certificate-card-bottom">SKILLS IN PRACTICE <span>↗</span></div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
        <p className="credentials-note">Verified credentials are listed under Achievements.</p>
      </div>
    </section>
    <section id="achievements" className="section-block highlights-section">
      <div className="section-wrap">
        <div className="section-heading">
          <div><div className="section-kicker">07 / Highlights</div><h2>Building momentum</h2></div>
          <p>Current milestones from work and projects shared in this portfolio.</p>
        </div>
        <div className="achievement-grid">
          {achievements.map((item) => (
            <article className="achievement-card" key={item.title}>
              <div className="achievement-card-top"><span>{item.icon} {item.eyebrow}</span><span>{item.badge}</span></div>
              <h3>{item.title}</h3>
              <div className="achievement-organization">{item.organization}</div>
              <p>{item.description}</p>
              {item.date && <div className="achievement-date">{item.date}</div>}
            </article>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Journey;