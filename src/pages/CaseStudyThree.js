import Tag from "../components/Tag";

export default function CaseStudyThree() {
  return (
    <section id="case-study" className="case-study">
      <h1>Interactive Learning Resource (TAFE Queensland) Case Study</h1>
      <div className="tags">
        {[
          { label: "HTML", icon: "html" },
          { label: "CSS", icon: "css" },
          { label: "JavaScript", icon: "javascript" },
          { label: "Bootstrap", icon: "bootstrap" },
          { label: "Git", icon: "git" },
          { label: "Photoshop", icon: "photoshop" },
        ].map((t) => (
          <Tag key={t.label} label={t.label} icon={t.icon} />
        ))}
      </div>
      <h2>🎯 Background</h2>
      <p>
        TAFE Queensland delivers online and blended learning to thousands of
        students across the state. While some older modules needed a refresh,
        the bigger challenge was producing <b>brand new content</b> — fast —
        that was consistent, interactive, and accessible.
      </p>
      <h2>🪛 Process</h2>
      <p>
        As a Multimedia Developer, I was hands-on in building{" "}
        <b>20+ new interactive modules</b>, while also modernizing a handful of
        legacy ones. My role included:
      </p>
      <ul>
        <li>
          Collaborating with instructional designers to translate lesson plans
          into engaging, interactive learning experiences.
        </li>
        <li>
          <b>Developing 20+ brand-new modules</b> using HTML, CSS, and
          JavaScript, optimized for both desktop and mobile learners.
        </li>
        <li>
          <b>Revamping a set of older modules</b> to improve usability, visual
          consistency, and accessibility compliance (WCAG).
        </li>
        <li>
          <b>Editing graphics and visual assets</b> in Photoshop and Illustrator
          to support the learning content.
        </li>
        <li>
          <b>Maintaining style guides</b> to ensure a consistent experience
          across all modules and make future updates easier for the team.
        </li>
      </ul>
      <h2>😄 Outcome</h2>
      <ul>
        <li>
          Delivered <b>20+ fully functional, modern modules</b> that improved
          learner engagement and comprehension.
        </li>
        <li>
          <b>Ensured WCAG accessibility compliance</b> so that every student
          could access course materials equally.
        </li>
        <li>
          Helped establish a <b>consistent, scalable design system</b>, reducing
          development time for future modules.
        </li>
      </ul>
      <div style={{ margin: "1rem 0" }}>
        <a
          href="https://tafeqld.edu.au/courses/ways-to-study/tafe-at-school"
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
