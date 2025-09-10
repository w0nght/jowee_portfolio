import Tag from "../components/Tag";

export default function CaseStudyPortfolio() {
    return (
        <section id="case-study" className="case-study">
            <h1>Responsive Portfolio — Case Study</h1>
            <div className="tags">
                {[{ label: "React", icon: "react" }, { label: "Node.js", icon: "node" }, { label: "CSS", icon: "css" }, { label: "HTML", icon: "html" }, { label: "JavaScript", icon: "javascript" }].map((t) => (
                    <Tag key={t.label} label={t.label} icon={t.icon} />
                ))}
            </div>
            <h2>🎯 Background</h2>
            <p>
                This portfolio showcases my front-end skills with a focus on responsive design, accessibility, and component reuse.
            </p>
            <h2>🪛 Process</h2>
            <ul>
                <li>Planned layout and navigation structure</li>
                <li>Built reusable components (Navbar, Tags, ProjectCard)</li>
                <li>Added responsive styles and routing for case studies</li>
            </ul>
            <h2>😄 Outcome</h2>
            <p>
                A polished, responsive site that clearly presents projects and provides deeper case studies for each.
            </p>
            <div style={{ margin: "1rem 0" }}>
                <a href="/" rel="noreferrer">
                    <button>Back Home</button>
                </a>
            </div>
            <h2>Screenshots</h2>
            <ul>
                <li>Hero and navigation</li>
                <li>Project cards with tags</li>
                <li>Case study pages</li>
            </ul>
        </section>
    );
}


