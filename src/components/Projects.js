import Tag from "./Tag";
import dark_mode_view_1 from "../images/dark_mode_view_1.png";
import light_mode_view_2 from "../images/light_mode_view_2.png";

function ProjectCard({ title, description, tags, images, liveUrl, caseStudyUrl }) {
    return (
        <div className="project-card">
            <div className="project-content">
                <div className="tags">
                    {tags.map((t) => (
                        <Tag key={t.label} label={t.label} icon={t.icon} />
                    ))}
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="buttons">
                    {liveUrl ? (
                        <a href={liveUrl} target="_blank" rel="noreferrer">
                            <button>View Live</button>
                        </a>
                    ) : (
                        <button disabled title="Coming soon">View Live</button>
                    )}
                    {caseStudyUrl && (
                        <a href={caseStudyUrl}>
                            <button>Read Case Study</button>
                        </a>
                    )}
                </div>
            </div>
            <div className="project-media">
                {images?.map((img, idx) => (
                    <img key={idx} src={img.src} alt={img.alt} width={img.width} height={img.height} />
                ))}
            </div>
        </div>
    );
}

function ProjectScrabbleHelper() {
    const tags = [
        { label: "HTML", icon: "html" },
        { label: "CSS", icon: "css" },
        { label: "JavaScript", icon: "javascript" },
        { label: "Vanilla JS", icon: "vanilla-js" },
    ];
    const images = [
        { src: dark_mode_view_1, alt: "Scrabble Helper screenshot Dark Mode" },
        // { src: light_mode_view_2, alt: "Scrabble Helper screenshot Light Mode", width: 200, height: 400 },
    ];
    return (
        <ProjectCard
            title="Scrabble Helper"
            description="A self-initiated web tool that helps users explore word combinations using filters, required letters, and wildcard support."
            tags={tags}
            images={images}
            liveUrl="https://scrabble-helper.netlify.app/"
            caseStudyUrl="/projects/scrabble-helper"
        />
    );
}

function ProjectPortfolio() {
    const tags = [
        { label: "React", icon: "react" },
        { label: "Node.js", icon: "node" },
        { label: "HTML", icon: "html" },
        { label: "CSS", icon: "css" },
        { label: "JavaScript", icon: "javascript" },
    ];
    const images = [
        { src: light_mode_view_2, alt: "Responsive Portfolio screenshot", width: 200, height: 400 },
    ];
    return (
        <ProjectCard
            title="Responsive Portfolio"
            description="This portfolio site itself! A responsive portfolio site built with React, using reusable components to keep the code clean, consistent, and scalable. Showcases my design, accessibility, and front-end development skills."
            tags={tags}
            images={images}
            liveUrl={undefined}
            caseStudyUrl="/projects/portfolio"
        />
    );
}

function ProjectThree() {
    const tags = [
        { label: "PHP", icon: "php" },
        { label: "Bootstrap", icon: "bootstrap" },
        { label: "Docker", icon: "docker" },
    ];
    const images = [
        { src: light_mode_view_2, alt: "Project Three screenshot", width: 200, height: 400 },
    ];
    return (
        <ProjectCard
            title="Project Three"
            description="Brief description of the third project. Replace with your content."
            tags={tags}
            images={images}
            liveUrl="#"
            caseStudyUrl="/projects/three"
        />
    );
}

function ProjectFour() {
    const tags = [
        { label: "Figma", icon: "figma" },
        { label: "Miro", icon: "miro" },
        { label: "Kubernetes", icon: "kubernetes" },
    ];
    const images = [
        { src: light_mode_view_2, alt: "Project Four screenshot", width: 200, height: 400 },
    ];
    return (
        <ProjectCard
            title="Project Four"
            description="Brief description of the fourth project. Replace with your content."
            tags={tags}
            images={images}
            liveUrl="#"
            caseStudyUrl="/projects/four"
        />
    );
}

export default function Projects() {
    return (
        <section id="projects">
            <h2>Featured Projects</h2>
            <ProjectScrabbleHelper />
            <ProjectPortfolio />
            <ProjectThree />
            <ProjectFour />
        </section>
    );
}
