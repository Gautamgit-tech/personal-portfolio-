import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

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

const certificates = [
  {
    title: "IBM Full Stack Software Developer",
    issuer: "IBM · Coursera",
    description: "Professional Certificate (V5)",
    date: "Aug 04, 2026",
    verificationUrl: "/IBM%20certificate.pdf",
  },
  {
    title: "Google Data Analytics",
    issuer: "Google · Coursera",
    description: "Professional Certificate",
    date: "Feb 22, 2026",
    verificationUrl: "/Google%20data%20analytics.pdf",
  },
  {
    title: "AINCAT 2026",
    issuer: "Naukri Campus",
    description: "Certificate of Participation",
    date: "Jun 01, 2026",
    verificationUrl: "/nc_ai_ncat_participation_may_2026.pdf",
  },
  {
    title: "Spring and Angular Full Stack Developer",
    issuer: "Infosys Springboard",
    description: "Program Completion Certificate",
    date: "Aug 16, 2025",
    verificationUrl: "/VAC%20angular.pdf",
  },
  {
    title: "Data Structures and Algorithms using Java",
    issuer: "Infosys Springboard",
    description: "Course Completion Certificate",
    date: "Oct 03, 2025",
    verificationUrl: "/vac%20java%20dsa.pdf",
  },
  {
    title: "Coding",
    issuer: "Chandigarh University",
    description: "Level-1 Certificate Course · Advanced Credit Program",
    date: "",
    verificationUrl: "/GAUTAM%20KUMAR%20CET3957224.pdf",
  },
  {
    title: "First Responders and Myth Busters",
    issuer: "CyberPeace Foundation",
    description: "Induction Training · Score: 140 / 150",
    date: "06-11-2025",
    verificationUrl: "/cyberpeace.pdf",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL · IIT Kharagpur",
    description: "Elite certification · Score: 65%",
    date: "Jan–Apr 2025",
    verificationUrl: "/Cloud%20Computing_compressed.pdf",
  },
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
          <p>Professional certificates, course completions, and training.</p>
        </div>
        <div className="certificate-marquee" aria-label="Professional certificates">
          <div className="certificate-track">
            {[0, 1].map((group) => (
              <div className="certificate-group" key={group} aria-hidden={group === 1}>
                {certificates.map((certificate, index) => (
                  <article
                    className="certificate-card"
                    key={certificate.title}
                    tabIndex={group === 0 ? 0 : -1}
                  >
                    <div className="certificate-card-top">
                      <span><Award size={16} /> {certificate.issuer}</span>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <h3>{certificate.title}</h3>
                    <p>{certificate.description}</p>
                    {certificate.date && <div className="certificate-date">{certificate.date}</div>}
                    <div className="certificate-card-bottom">
                      {certificate.verificationUrl ? (
                        <a href={certificate.verificationUrl} target="_blank" rel="noreferrer">
                          VIEW CERTIFICATE <span>↗</span>
                        </a>
                      ) : (
                        <span className="certificate-link-placeholder">ADD VERIFICATION LINK</span>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
        
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