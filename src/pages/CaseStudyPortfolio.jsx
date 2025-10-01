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

const ProjectImplementation = () => (
  <>
    <h2>🪛 Implementation</h2>
    <h3>Reusable Components</h3>
    <ul>
      <li>
        Built a single, reusable{" "}
        <span className="inline-code">ProjectCard</span> component that handles
        layout and styling for every project.
      </li>
      <CodeBlock language="js" code={codeSnippets.projectCardExample} />
      <li>
        Used props to pass in each project’s title, description, tags,
        screenshots, and links.
      </li>
      <CodeBlock language="js" code={codeSnippets.tagsExample} />
      <CodeBlock language="js" code={codeSnippets.imagesExample} />
      <li>
        Created lightweight wrappers (like{" "}
        <span className="inline-code">ProjectScrabbleHelper</span>,{" "}
        <span className="inline-code">ProjectPortfolio</span>, etc.) that simply
        feed props into <span className="inline-code">ProjectCard</span>.
      </li>
      <li>
        Exported a single <span className="inline-code">Projects()</span>{" "}
        component that renders all four cards under the “Featured Projects”
        heading — keeping the structure clean, consistent, and expandable.
      </li>
    </ul>
  </>
);

const ProjectFutureProofing = () => (
  <>
    <h2>🔮 Future-Proofing</h2>
    <h3>State Management & Hooks</h3>
    <ul>
      <li>
        <b>What I used:</b> React’s built-in{" "}
        <span className="inline-code">useState</span> and{" "}
        <span className="inline-code">useEffect</span> hooks, plus a custom hook
        (<span className="inline-code">useNavbar</span>).
      </li>
      <li>
        <b>How I used it:</b>
        <br />- Controlled navigation menu open/close state (
        <span className="inline-code">isOpen</span>).
        <br />- Tracked screen size (
        <span className="inline-code">isSmallScreen</span>) to adjust menu
        behavior responsively.
        <br />
        - Managed component interactions like dropdowns and toggles.
        <br />- Extracted that logic into a custom hook (
        <span className="inline-code">useNavbar</span>) to keep components lean
        and reusable.
      </li>
      <li>
        <b>Why I chose this:</b> Built-in hooks are lightweight and perfect for
        a portfolio site. A custom hook improves readability and avoids
        repeating the same logic across components.
      </li>
      <li>
        <b>Alternative:</b> A global state manager (Redux, Zustand, Context API)
        could handle shared state in larger apps, but would be overkill here.
      </li>
    </ul>

    <h3>Reusable Components</h3>
    <ul>
      <li>
        <b>What I used:</b> Components like{" "}
        <span className="inline-code">ProjectCard</span> and{" "}
        <span className="inline-code">Tag</span>.
      </li>
      <li>
        <b>How I used it:</b> Encapsulated markup + styling, then fed props for
        dynamic content (title, description, tags, images, links).
      </li>
      <li>
        <b>Alternative:</b> Could have repeated JSX for each project, but that
        would hurt scalability and consistency.
      </li>
    </ul>

    <h3>Centralized Data</h3>
    <ul>
      <li>
        <b>What I used:</b> <span className="inline-code">imagePaths.js</span>{" "}
        config file.
      </li>
      <li>
        <b>How I used it:</b> Stored project asset paths and imported them
        across components to avoid hardcoding and duplication.
      </li>
      <li>
        <b>Alternative:</b> Could have kept paths inline in each component, but
        that would break maintainability.
      </li>
    </ul>

    <h3>Deployment</h3>
    <ul>
      <li>
        <b>What I used:</b> Netlify for continuous deployment.
      </li>
      <li>
        <b>How I used it:</b> Automatic deployment from GitHub on push; Netlify
        handles build pipeline, hosting, and HTTPS.
      </li>
      <li>
        <b>Alternative:</b> Could have used Vercel or GitHub Pages, but Netlify
        gave me the simplest workflow for React + custom domains.
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
      <h2>Responsive Portfolio Case Study</h2>

      {/* Tech Tags */}
      <div className="tags">
        {techTags.map((t) => (
          <Tag key={t.label} {...t} />
        ))}
      </div>

      {/* Sections */}
      <ProjectBackground />
      <ProjectImplementation />
      <ProjectFutureProofing />
      <ProjectOutcome />

      {/* Gallery */}
      <h2>Screenshots</h2>
      <CustomGallery images={portfolioImages} />
    </section>
  );
}
