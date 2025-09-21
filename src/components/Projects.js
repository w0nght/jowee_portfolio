import Tag from "./Tag";

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
    { label: "JavaScript (Vanilla & ES6+)", icon: "javascript" },
    { label: "Git", icon: "git" },
  ];
  const images = [
    {
      src: "../assets/images/scrabble-helper/dark_mode_view_1.png",
      alt: "Scrabble Helper screenshot Dark Mode",
    },

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
    { label: "HTML", icon: "html" },
    { label: "CSS", icon: "css" },
    { label: "JavaScript", icon: "javascript" },
    { label: "React", icon: "react" },
    { label: "Node.js", icon: "node" },
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
    { label: "Deployment", icon: "deployment" },
    { label: "Accessibility", icon: "accessibility" },
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
