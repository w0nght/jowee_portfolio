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
        <li>
          Collaborated with instructional designers to deliver engaging online
          learning.
        </li>
        <li>Developed resources optimized for both web and mobile.</li>
        <li>Maintained style guides for consistency across modules.</li>
      </ul>
    </ExperienceCard>
  );
}

// 🎓 edX / Monash
function ExperienceEdX() {
  const tags = [
    { label: "Figma", icon: "figma" },
    { label: "Miro", icon: "miro" },
    { label: "GitHub", icon: "git" },
    { label: "JavaScript", icon: "javascript" },
  ];
  return (
    <ExperienceCard
      date="Dec 2022 – Mar 2024"
      title="UX/UI Teaching Assistant"
      company="edX (Monash University)"
      description="Mentored students through Monash University’s UX/UI Bootcamp."
      tags={tags}
    >
      <ul>
        <li>Guided students through coding challenges and design reviews.</li>
        <li>
          Provided real-time troubleshooting during workshops and projects.
        </li>
      </ul>
    </ExperienceCard>
  );
}

// 📡 Symbio Networks
function ExperienceSymbio() {
  const tags = [
    { label: "PHP", icon: "php" },
    { label: "SQL", icon: "mysql" },
    { label: "Docker", icon: "docker" },
    { label: "Elastic", icon: "elastic" },
    { label: "CI/CD", icon: "git" },
    { label: "QA", icon: "code" },
  ];
  return (
    <ExperienceCard
      date="Jan 2022 – Apr 2023"
      title="Graduate Software Engineer"
      company="Symbio Networks"
      description="Ensured seamless operation of ALDI Mobile provisioning systems, supporting thousands of customers with reliable recharges and notifications."
      tags={tags}
    >
      <ul>
        <li>
          Configured custom Watcher alarms in ELK stack to detect anomalies.
        </li>
        <li>
          Analyzed logs in Kibana to prevent customer-impacting incidents.
        </li>
        <li>Managed deployments across 11 applications with GitLab CI/CD.</li>
        <li>Acted as interim QA, executing test cases and validating fixes.</li>
      </ul>
    </ExperienceCard>
  );
}

// 🎤 FanTipper
function ExperienceFanTipper() {
  const tags = [
    { label: "React Native", icon: "react-native" },
    { label: "React", icon: "react" },
    { label: "JavaScript", icon: "javascript" },
    { label: "UI/UX", icon: "palette" },
  ];
  return (
    <ExperienceCard
      date="Oct 2018 – Mar 2020"
      title="Software Engineer"
      company="FanTipper"
      description="Led front-end development for both web and mobile apps, building a responsive platform for fans and creators."
      tags={tags}
    >
      <ul>
        <li>
          Built cross-platform apps with React Native for iOS and Android.
        </li>
        <li>
          Developed responsive web pages with React and modern UI practices.
        </li>
        <li>Contributed to design discussions in a small, agile team.</li>
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
