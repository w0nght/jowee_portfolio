import Tag from "../components/Tag";

// Static data
const techTags = [
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

export default function CaseStudyALDI() {
  return (
    <section id="case-study" className="case-study">
      <h2>
        Seamless Provisioning for ALDI Mobile (Symbio Networks) Case Study
      </h2>

      <div className="tags">
        {techTags.map((t) => (
          <Tag key={t.label} label={t.label} icon={t.icon} />
        ))}
      </div>

      <Intro />
      <Process />
      <Outcome />

      <div style={{ margin: "1rem 0" }}>
        <a
          href="https://www.aldimobile.com.au/"
          target="_blank"
          rel="noreferrer"
        >
          <button>View Live</button>
        </a>
      </div>

      {/* <h2>Screenshots</h2>
      <ul>
        <li>(Coming soon)</li>
      </ul> */}
    </section>
  );
}

function Intro() {
  return (
    <>
      <h2>🎯 Background</h2>
      <p>
        At Symbio Networks, our team was responsible for the provisioning
        systems behind <strong>ALDI Mobile</strong> — meaning every mobile
        recharge, data top-up, and SMS campaign had to work flawlessly for
        thousands of customers every single day.
      </p>
      <p>
        Keeping these systems running wasn’t just important — it was critical. A
        single failure could mean a customer couldn’t recharge their plan or
        receive time-sensitive notifications.
      </p>
    </>
  );
}

function Process() {
  return (
    <>
      <h2>🪛 Process</h2>
      <p>
        I wore many hats in this role, combining development, monitoring, and QA
        to ensure everything worked seamlessly:
      </p>
      <ul>
        <li>
          <strong>Configured custom Watcher alarms</strong> in the ELK Stack to
          proactively detect anomalies and trigger alerts.
        </li>
        <li>
          <strong>Analyzed Kibana logs</strong> to identify unusual patterns
          before they could impact customers — preventing issues before they
          escalated.
        </li>
        <li>
          Acted as <strong>interim QA</strong>, writing and executing test
          plans, testing endpoint APIs in Postman, and retesting fixes after
          deployment.
        </li>
        <li>
          Utilized <strong>GitLab CI/CD</strong> for automated deployments
          across 11 applications, monitoring build pipelines and resolving
          failures quickly.
        </li>
        <li>
          Provided <strong>after-hours support</strong> for critical processes,
          ensuring that customers had 24/7 service continuity.
        </li>
      </ul>
    </>
  );
}

function Outcome() {
  return (
    <>
      <h2>😄 Outcome</h2>
      <ul>
        <li>
          <strong>Zero critical downtime</strong> incidents during my time in
          the role.
        </li>
        <li>
          Faster detection and resolution of anomalies, thanks to improved
          alerting and log analysis.
        </li>
        <li>
          A smoother experience for customers — mobile plans recharged reliably,
          and campaigns went out on schedule without hiccups.
        </li>
      </ul>
    </>
  );
}
