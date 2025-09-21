"use client";
import { motion } from "framer-motion";
import Tag from "./Tag";
import "./ExperienceSection.css";

// Reusable ExperienceCard component
function ExperienceCard({ date, title, company, description, tags, children }) {
  return (
    <motion.div
      className="experience-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="experience-content">
        <span className="experience-date">{date}</span>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <div className="tags">
          {tags.map((t) => (
            <Tag key={t.label} label={t.label} icon={t.icon} />
          ))}
        </div>
        <p>{description}</p>
        {children}
      </div>
    </motion.div>
  );
}

// 🎨 TAFE Queensland
function ExperienceTAFE() {
  const tags = [
    { label: "HTML", icon: "html" },
    { label: "CSS", icon: "css" },
    { label: "JavaScript", icon: "javascript" },
    { label: "Bootstrap", icon: "bootstrap" },
    { label: "Git", icon: "git" },
    { label: "Deployment", icon: "deployment" },
    { label: "Accessibility", icon: "accessibility" },
    { label: "Photoshop", icon: "photoshop" },
  ];
  return (
    <ExperienceCard
      date="Feb 2024 – Jan 2025"
      title="Multimedia Developer"
      company="TAFE Queensland"
      description="Created 20+ new interactive learning modules and revamped older ones for usability and WCAG compliance."
      tags={tags}
    >
      <ul>
        <li>Collaborated with instructional designers to deliver engaging online and blended learning.</li>
        <li>Designed, developed, and implemented engaging multimedia content for online and blended learning.</li>
        <li>Maintained style guides for consistency across modules.</li>
      </ul>
    </ExperienceCard>
  );
}

// 🎓 edX / Monash
function ExperienceEdX() {
  const tags = [
    { label: "JavaScript", icon: "javascript" },
    { label: "jQuery", icon: "jquery" },
    { label: "Git", icon: "git" },
    { label: "Troubleshooting", icon: "troubleshooting" },
    { label: "Figma", icon: "figma" },
    { label: "Miro", icon: "miro" },
  ];
  return (
    <ExperienceCard
      date="Dec 2022 – Mar 2024"
      title="UX/UI Teaching Assistant"
      company="edX (Monash University)"
      description="Helped students achieve their learning goals to become UX/UI designers and developers through Monash University’s UX/UI Bootcamp."
      tags={tags}
    >
      <ul>
        <li>Provided support to students along with the teaching instructor.</li>
        <li>Provided real-time troubleshooting during workshops and projects.</li>
        <li>Guided students through coding challenges and design reviews.</li>
        <li>Graded students' homework and group project assignments.</li>
      </ul>
    </ExperienceCard>
  );
}

// 📡 Symbio Networks
function ExperienceSymbio() {
  const tags = [
    { label: "HTML", icon: "html" },
    { label: "CSS", icon: "css" },
    { label: "JavaScript", icon: "javascript" },
    { label: "PHP", icon: "php" },
    { label: "AWS (cloud platform)", icon: "aws" },
    { label: "Docker (containerization)", icon: "docker" },
    { label: "Kubernetes (orchestration)", icon: "kubernetes" },
    { label: "GitLab CI/CD (automation & pipelines)", icon: "git" },
    { label: "Elastic (logging, search, monitoring)", icon: "elastic" },
    { label: "Git", icon: "git" },
    { label: "Deployment", icon: "deployment" },
    { label: "Agile Methodologies", icon: "agile" },
  ];
  return (
    <ExperienceCard
      date="Jan 2022 – Apr 2023"
      title="Graduate Software Engineer"
      company="Symbio Networks"
      description="As a Graduate Software Engineer, I had diverse responsibilities encompassing software development, logging and monitoring, and testing. Within my team, we focused on the provisioning for ALDI Mobile. Our main objective was to ensure the seamless operation of ALDI Mobile, including critical functions like mobile plan recharges, the effective distribution of mail and SMS campaigns."
      tags={tags}
    >
      <p>Software developing and deploying:</p>
      <ul>
        <li>Participated in the full software development lifecycle, including requirements analysis, design, coding, testing, and deployment.</li>
        <li>Managed deployments across 11 applications with GitLab CI/CD.</li>
        <li>Monitored and resolved issues related to build failures, test errors, and deployment glitches.</li>
      </ul>
      <p>Logging and monitoring:</p>
      <ul>
        <li>Configured custom Watcher alarms in ELK stack to detect anomalies and trigger notifications.</li>
        <li>Analyzed logs in Kibana to prevent customer-impacting incidents.</li>
        <li>Actively took on the responsibility of After-Hour Support for critical processes outside regular business hours.</li>
      </ul>
      <p>Testing:</p>
      <ul>
        <li>Acted as interim QA, executing test cases and validating fixes.</li>
      </ul>
    </ExperienceCard>
  );
}

// 🎤 FanTipper
function ExperienceFanTipper() {
  const tags = [
    { label: "HTML", icon: "html" },
    { label: "CSS", icon: "css" },
    { label: "JavaScript", icon: "javascript" },
    { label: "React", icon: "react" },
    { label: "React Native", icon: "react" },
  ];
  return (
    <ExperienceCard
      date="Oct 2018 – Mar 2020"
      title="Software Engineer"
      company="FanTipper"
      description="Handled the front-end development for the FanTipper mobile app from scratch, building a responsive platform for fans and creators."
      tags={tags}
    >
      <ul>
        <li>
          Built cross-platform apps with React Native for iOS and Android.
        </li>
        <li>Contributed to design discussions in a small, agile team.</li>
        <li> Gained valuable insights and experience in the fundraising sector, contributing as a collaborative team player in a dynamic work environment.</li>
      </ul>
    </ExperienceCard>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <ExperienceTAFE />
      <ExperienceEdX />
      <ExperienceSymbio />
      <ExperienceFanTipper />
    </section>
  );
}
