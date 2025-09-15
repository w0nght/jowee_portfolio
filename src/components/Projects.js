import Tag from "./Tag";
// import dark_mode_view_1 from "../assets/images/scrabble-helper/dark_mode_view_1.png";
// import my_ss_1 from "../assets/images/jowee-portfolio/my_ss_1.png";
// import tafe_ss_1 from "../assets/images/tafeqld/ss_1.png";
// import aldi_ss_1 from "../assets/images/symbio/ss_1.png";

function ProjectCard({
  title,
  description,
  tags,
  images,
  liveUrl,
  caseStudyUrl,
}) {
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
            <button disabled title="Coming soon">
              View Live
            </button>
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
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
          />
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
    { label: "Git", icon: "git" },
  ];
  const images = [
    {
      src: "../assets/images/scrabble-helper/dark_mode_view_1.png",
      alt: "Scrabble Helper screenshot Dark Mode",
    },
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
    { label: "Git", icon: "git" },
  ];
  const images = [
    {
      src: "../assets/images/jowee-portfolio/my_ss_1.png",
      alt: "Responsive Portfolio screenshot",
    },
  ];
  return (
    <ProjectCard
      title="Responsive Portfolio"
      description="This portfolio site itself! A responsive portfolio site built with React, using reusable components to keep the code clean, consistent, and scalable."
      tags={tags}
      images={images}
      liveUrl={undefined}
      caseStudyUrl="/projects/portfolio"
    />
  );
}

function ProjectTAFE() {
  const tags = [
    { label: "HTML", icon: "html" },
    { label: "CSS", icon: "css" },
    { label: "JavaScript", icon: "javascript" },
    { label: "Bootstrap", icon: "bootstrap" },
    { label: "Git", icon: "git" },
    { label: "Photoshop", icon: "photoshop" },
  ];
  const images = [
    {
      src: "../assets/images/tafeqld/ss_1.png",
      alt: "Project Three screenshot",
    },
  ];
  return (
    <ProjectCard
      title="Interactive Learning Resource (TAFE Queensland)"
      description="Developed engaging multimedia content for online and blended learning courses, with accessibility as a core focus."
      tags={tags}
      images={images}
      liveUrl="https://tafeqld.edu.au/courses/ways-to-study/tafe-at-school"
      caseStudyUrl="/projects/three"
    />
  );
}

function ProjectALDI() {
  const tags = [
    { label: "Docker", icon: "docker" },
    { label: "Kubernetes", icon: "kubernetes" },
    { label: "Elastic", icon: "elastic" },
    { label: "HTML", icon: "html" },
    { label: "CSS", icon: "css" },
    { label: "JavaScript", icon: "javascript" },
    { label: "PHP", icon: "php" },
    { label: "GitLab CI/CD", icon: "git" },
    { label: "Git", icon: "git" },
  ];
  const images = [
    { src: "../assets/images/symbio/ss_1.png", alt: "Project Four screenshot" },
  ];
  return (
    <ProjectCard
      title="Seamless Provisioning for ALDI Mobile (Symbio Networks)"
      description="Implemented custom monitoring and QA processes to ensure smooth deployments for ALDI Mobile provisioning systems."
      tags={tags}
      images={images}
      liveUrl="https://www.aldimobile.com.au/"
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
      <ProjectTAFE />
      <ProjectALDI />
    </section>
  );
}
