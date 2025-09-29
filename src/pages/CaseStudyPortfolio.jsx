import Tag from "../components/Tag";
import CodeBlock from "../components/CodeBlock";
import CustomGallery from "../components/Gallery";
import { portfolioImages } from "../data/caseStudyImages";

// Static data outside the component
const techTags = [
  { label: "HTML", icon: "html" },
  { label: "CSS", icon: "css" },
  { label: "JavaScript", icon: "javascript" },
  { label: "React", icon: "react" },
  { label: "Node.js", icon: "node" },
  { label: "Git", icon: "git" },
];

const codeSnippets = {
  projectCardExample: `<ProjectCard
 title="Scrabble Helper"
 description="A self-initiated web tool that helps users explore word combinations using filters, required letters, and wildcard support."
 tags={tags}
 images={images}
 liveUrl="https://scrabble-helper.netlify.app/"
 caseStudyUrl="/projects/scrabble-helper"
/>`,
  tagsExample: `const tags = [
  { label: "HTML", icon: "html" },
  { label: "CSS", icon: "css" },
  { label: "JavaScript (Vanilla & ES6+)", icon: "javascript" },
  { label: "Git", icon: "git" },
];`,
  imagesExample: `import { IMAGE_PATHS } from "../data/imagePaths";

const { SCRABBLE, PORTFOLIO } = IMAGE_PATHS;

const images = [
  {
    src: \`\${SCRABBLE}/dark_mode_view_1.png\`,
    alt: "Scrabble Helper screenshot Dark Mode",
  },
];`,
};

// Sub-components for cleaner structure
const ProjectBackground = () => (
  <>
    <h2>🎯 Background</h2>
    <p>
      I wanted to create a maintainable way to display multiple projects without
      repeating markup for every card, and make it easy for recruiters to
      explore my experience. 😉
    </p>
  </>
);

const ProjectProcess = () => (
  <>
    <h2>🪛 Process</h2>
    <ul>
      <li>
        Built a single, reusable{" "}
        <span className="inline-code">ProjectCard</span> <b>component</b> that
        handles layout and styling for every project.
      </li>
      <CodeBlock language="js" code={codeSnippets.projectCardExample} />
      <li>
        Used props to pass in each project’s title, description, tags,
        screenshots, and links.
      </li>
      <CodeBlock language="js" code={codeSnippets.tagsExample} />
      <CodeBlock language="js" code={codeSnippets.imagesExample} />
      <li>
        Created four little “project functions” (like{" "}
        <span className="inline-code">ProjectScrabbleHelper</span>,{" "}
        <span className="inline-code">ProjectPortfolio</span>, etc.) that simply
        feed props into <span className="inline-code">ProjectCard</span>.
      </li>
      <li>
        Exported a single <span className="inline-code">Projects()</span>{" "}
        component that renders all four cards under the “Featured Projects”
        heading — making it clean, consistent, and easy to expand.
      </li>
    </ul>
  </>
);

const ProjectOutcome = () => (
  <>
    <h2>😄 Outcome</h2>
    <p>
      Now, with React.js, adding a new project is as simple as writing a few
      props — no duplicated markup, no extra CSS headaches. It keeps the site
      tidy and scalable, and it’s a nice example of how I approach
      component-driven development in React: organized, reusable, and
      future-proof.
    </p>
    <h3>🦉 P.S. To My Students:</h3>
    <p>
      If you’re reading this — feel free to peek at the code, copy what you
      like, and paste it into your own portfolio or projects. That’s how we all
      learn! 😊
    </p>
  </>
);

export default function CaseStudyPortfolio() {
  // Clean structure: Long return split into ProjectBackground, ProjectProcess, ProjectOutcome.
  return (
    <section id="case-study" className="case-study">
      <h1>Responsive Portfolio Case Study</h1>

      {/* Tech Tags */}
      <div className="tags">
        {techTags.map((t) => (
          <Tag key={t.label} {...t} />
        ))}
      </div>

      {/* Sections */}
      <ProjectBackground />
      <ProjectProcess />
      <ProjectOutcome />

      {/* Gallery */}
      <h2>Screenshots</h2>
      <CustomGallery images={portfolioImages} />
    </section>
  );
}
