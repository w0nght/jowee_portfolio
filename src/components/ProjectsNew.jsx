import { PROJECTS } from "../data/projectsData";
import ProjectCard from "./ProjectCard";

export default function ProjectsNew() {
    return (
        <section id="projects">
            <h2>Featured Projects</h2>
            {Object.values(PROJECTS).map((project) => (
                <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    images={project.images}
                    liveUrl={project.liveUrl}
                    caseStudyUrl={project.caseStudyUrl}
                />
            ))}
        </section>
    );
}
