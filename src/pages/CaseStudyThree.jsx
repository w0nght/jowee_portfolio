import Tag from "../components/Tag";

// Static data
const techTags = [
  { label: "HTML", icon: "html" },
  { label: "CSS", icon: "css" },
  { label: "JavaScript", icon: "javascript" },
  { label: "Bootstrap", icon: "bootstrap" },
  { label: "Git", icon: "git" },
  { label: "Deployment", icon: "deployment" },
  { label: "Accessibility", icon: "accessibility" },
  { label: "Photoshop", icon: "photoshop" },
];

export default function CaseStudyTAFE() {
  return (
    <section id="case-study" className="case-study">
      <h2>Interactive Learning Resource (TAFE Queensland) Case Study</h2>

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
          href="https://tafeqld.edu.au/courses/ways-to-study/tafe-at-school"
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
        TAFE Queensland delivers online and blended learning to thousands of
        students across the state. While some older modules needed a refresh,
        the bigger challenge was producing <strong>brand new content</strong> —
        fast — that was consistent, interactive, and accessible.
      </p>
    </>
  );
}

function Process() {
  return (
    <>
      <h2>🪛 Process</h2>
      <p>
        As a Multimedia Developer, I was hands-on in building{" "}
        <strong>20+ new interactive modules</strong>, while also modernizing a
        handful of legacy ones. My role included:
      </p>
      <ul>
        <li>
          Collaborating with instructional designers to translate lesson plans
          into engaging, interactive learning experiences.
        </li>
        <li>
          <strong>Developing 20+ brand-new modules</strong> using HTML, CSS, and
          JavaScript, optimized for both desktop and mobile learners.
        </li>
        <li>
          <strong>Revamping a set of older modules</strong> to improve
          usability, visual consistency, and accessibility compliance (WCAG).
        </li>
        <li>
          <strong>Editing graphics and visual assets</strong> in Photoshop and
          Illustrator to support the learning content.
        </li>
        <li>
          <strong>Maintaining style guides</strong> to ensure a consistent
          experience across all modules and make future updates easier for the
          team.
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
          Delivered <strong>20+ fully functional, modern modules</strong> that
          improved learner engagement and comprehension.
        </li>
        <li>
          <strong>Ensured WCAG accessibility compliance</strong> so that every
          student could access course materials equally.
        </li>
        <li>
          Helped establish a <strong>consistent, scalable design system</strong>
          , reducing development time for future modules.
        </li>
      </ul>
    </>
  );
}
