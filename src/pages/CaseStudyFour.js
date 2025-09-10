import Tag from "../components/Tag";

export default function CaseStudyFour() {
    return (
        <section id="case-study" className="case-study">
            <h1>Project Four — Case Study</h1>
            <div className="tags">
                {[{ label: "Figma", icon: "figma" }, { label: "Miro", icon: "miro" }, { label: "Kubernetes", icon: "kubernetes" }].map((t) => (
                    <Tag key={t.label} label={t.label} icon={t.icon} />
                ))}
            </div>
            <h2>🎯 Background</h2>
            <p>
                Brief background about the project. Replace with specific context.
            </p>
            <h2>🪛 Process</h2>
            <ul>
                <li>Key design and implementation steps</li>
                <li>Technologies and tooling used</li>
                <li>Testing and deployment notes</li>
            </ul>
            <h2>😄 Outcome</h2>
            <p>
                Summary of impact and lessons learned.
            </p>
            <div style={{ margin: "1rem 0" }}>
                <a href="#" rel="noreferrer">
                    <button>View Live</button>
                </a>
            </div>
            <h2>Screenshots</h2>
            <ul>
                <li>Key UI or flow 1</li>
                <li>Key UI or flow 2</li>
                <li>Key UI or flow 3</li>
            </ul>
        </section>
    );
}


