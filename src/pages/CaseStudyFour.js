import Tag from "../components/Tag";

export default function CaseStudyFour() {
  return (
    <section id="case-study" className="case-study">
      <h1>
        Seamless Provisioning for ALDI Mobile (Symbio Networks) Case Study
      </h1>
      <div className="tags">
        {[
          { label: "Docker", icon: "docker" },
          { label: "Kubernetes", icon: "kubernetes" },
          { label: "Elastic", icon: "elastic" },
          { label: "HTML", icon: "html" },
          { label: "CSS", icon: "css" },
          { label: "JavaScript", icon: "javascript" },
          { label: "PHP", icon: "php" },
          { label: "GitLab CI/CD", icon: "git" },
          { label: "Git", icon: "git" },
        ].map((t) => (
          <Tag key={t.label} label={t.label} icon={t.icon} />
        ))}
      </div>
      <h2>🎯 Background</h2>
      <p>
        At Symbio Networks, our team was responsible for the provisioning
        systems behind <b>ALDI Mobile</b> — meaning every mobile recharge, data
        top-up, and SMS campaign had to work flawlessly for thousands of
        customers every single day.
      </p>
      <p>
        Keeping these systems running wasn’t just important — it was critical. A
        single failure could mean a customer couldn’t recharge their plan or
        receive time-sensitive notifications.
      </p>
      <h2>🪛 Process</h2>
      <p>
        I wore many hats in this role, combining development, monitoring, and QA
        to ensure everything worked seamlessly:
      </p>
      <ul>
        <li>
          <b>Configured custom Watcher alarms</b> in the ELK Stack to
          proactively detect anomalies and trigger alerts.
        </li>
        <li>
          <b>Analyzed Kibana logs</b> to identify unusual patterns before they
          could impact customers — preventing issues before they escalated.
        </li>
        <li>
          Acted as <b>interim QA</b>, writing and executing test plans, testing
          endpoint APIs in Postman, and retesting fixes after deployment.
        </li>
        <li>
          Utilized <b>GitLab CI/CD</b> for automated deployments across 11
          applications, monitoring build pipelines and resolving failures
          quickly.
        </li>
        <li>
          Provided <b>after-hours support</b> for critical processes, ensuring
          that customers had 24/7 service continuity.
        </li>
      </ul>
      <h2>😄 Outcome</h2>
      <ul>
        <li>
          <b>Zero critical downtime</b> incidents during my time in the role.
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
      <div style={{ margin: "1rem 0" }}>
        <a
          href="https://www.aldimobile.com.au/"
          target="_blank"
          rel="noreferrer"
        >
          <button>View Live</button>
        </a>
      </div>
      <h2>Screenshots</h2>
      <ul>
        <li>(Coming soon)</li>
      </ul>
    </section>
  );
}
