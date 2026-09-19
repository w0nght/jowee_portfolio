import Tag from "../components/Tag";
// import CodeBlock from "../components/CodeBlock";
import CustomGallery from "../components/Gallery";
import { pickAndSpinImages } from "../data/caseStudyImages";
import { PROJECTS } from "../data/projectsData";

// Static data
const techTags = [
    { label: "HTML", icon: "html" },
    { label: "Tailwind CSS", icon: "tailwind" },
    { label: "JavaScript and JSX", icon: "javascript" },
    { label: "React", icon: "react" },
    { label: "Vite", icon: "vite" },
];

export default function CaseStudyPickAndSpin() {
    return (
        <section id="case-study" className="case-study">
            <h2>Pick and Spin Case Study</h2>

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
                    href={PROJECTS.PICK_AND_SPIN.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    <button>View Live</button>
                </a>
            </div>

            {/* Screenshots / Demo */}
            <h2>📸 Screenshots/Demo</h2>
            <CustomGallery images={pickAndSpinImages} />
        </section>
    );
}

function Intro() {
    return (
        <>
            <h2>🎯 Background</h2>
            <p>Pick & Spin began as a personal web development project designed to make everyday decisions quicker and more enjoyable. The goal was to create a simple random picker that could be used for decisions such as choosing a cuisine, selecting a quick meal, picking a color, flipping between heads and tails, or creating a completely custom wheel.
            </p>
            <p>Many random picker websites provide only a temporary list of options. Users often need to enter the same choices again when they return. To improve this experience, I wanted Pick & Spin to remember each user’s customised wheels without requiring an account, login, or external database.
            </p>
            <p> I also wanted the application to be easy to share, responsive across different screen sizes, and suitable for deployment alongside my other personal web applications on Netlify.</p>
            <p>The project gave me an opportunity to strengthen my understanding of React component design, browser storage, animation, responsive styling, theme management, and static web deployment.</p>
        </>
    );
}

function Process() {
    return (
        <>
            <h2>🪛 Process</h2>
            <p>
                I first built the core wheel, category selection, option editing, sharing, and browser storage inside a single React component.
            </p>
            <p>
                After validating the main functionality, I refactored the application into reusable components for the wheel, option editor, category controls, dialogs, theme management, data, and storage.
            </p>
            <p>
                The wheel uses generated SVG segments and Framer Motion for its spinning animation. User settings are saved with localStorage, while Tailwind CSS provides responsive styling and light, dark, and system themes.
            </p>
            <p>
                I used ESLint and production builds throughout development to identify and resolve code-quality, import, export, and React rendering issues.
            </p>
        </>
    );
}

function Outcome() {
    return (
        <>
            <h2>😄 Outcome</h2>
            <p>The result is a responsive random picker application that works across desktop and mobile devices.</p>
            <p>Users can edit built-in wheels, create multiple custom wheels, switch themes, share the website, and return later without losing their settings. The project also gave me more practical experience in React component design, state management, browser storage, animation, responsive design, debugging, and deployment.</p>
            <h2>⚙️ Tech Stack Summary</h2>
            <p>Framework: React with JavaScript and JSX<br />
                Build tool: Vite<br />
                Styling: Tailwind CSS<br />
                Animation: Framer Motion<br />
                Icons: Lucide React<br />
                Storage: Browser localStorage<br />
                Deployment: Netlify<br />
                Version control: Git and GitHub
            </p>
        </>
    );
}
