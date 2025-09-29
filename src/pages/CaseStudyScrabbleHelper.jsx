import CustomGallery from "../components/Gallery";
import { scrabbleHelperImages } from "../data/caseStudyImages";
import Tag from "../components/Tag";

// Static data
const techTags = [
  { label: "HTML", icon: "html" },
  { label: "CSS", icon: "css" },
  { label: "JavaScript (Vanilla & ES6+)", icon: "javascript" },
  { label: "Git", icon: "git" },
];

// Sub-components for readability
const Background = () => (
  <>
    <h2>🎯 Background</h2>
    <p>
      This project was born out of pure Scrabble frustration. Every game night,
      I’d sit across from my native-speaking partner, staring at my tiles like
      they were ancient runes.
    </p>
    <p>
      They’d casually drop a seven-letter word on a triple-word score, while I’d
      play “CAT” for nine points and call it a win.
    </p>
    <p>
      I got tired of losing.
      <br />I wanted to win.
      <br />I wanted to <em>cheat</em> (just a little).
    </p>
    <p>
      So I did what any software engineer would do — I built a tool to give
      myself a secret edge.
    </p>
    <p>
      Scrabble Helper was born: my way of leveling the playing field with a
      little bit of code, a little bit of logic, and a lot of determination.
    </p>
  </>
);

const Process = () => (
  <>
    <h2>🪛 Process</h2>
    <p>
      <b>Step 1: Get the Words</b>
      <br />I started with a dictionary JSON file so I could search through
      valid words quickly.
    </p>
    <p>
      <b>Step 2: Build the Interface</b>
      <br />
      Designed a clean, minimal UI with modular CSS and a responsive layout so I
      could use it on my phone mid-game without suspicion.
    </p>
    <p>
      <b>Step 3: Add Filtering Superpowers</b>
    </p>
    <ul>
      <li>Word length filter</li>
      <li>Required letters & position (e.g., A3 = “A” in position 3)</li>
      <li>Exclude letters (Coming soon)</li>
    </ul>
    <p>
      <b>Step 4: Wildcard Mode</b>
      <br />
      Added “?” support so I can magically conjure any letter when I’m one
      short.
    </p>
    <p>
      <b>Step 5: Sprinkle Some Delight</b>
    </p>
    <ul>
      <li>Animated results to make it less boring</li>
      <li>Reset button</li>
      <li>Sort results (Score, Length, Alphabetical)</li>
      <li>Light/Dark theme support</li>
    </ul>
  </>
);

const Outcome = () => (
  <>
    <h2>😄 Outcome</h2>
    <p>
      A fast, fun, and totally mobile-friendly tool that lets me quietly turn
      “CAT” into “CATHODE” behind the scenes (my partner is suspicious, but
      impressed).
    </p>
    <p>
      Also a showcase of my ability to take an idea from concept to deployment
      (of course this is more important!).
    </p>
    <div className="case-study-buttons" style={{ margin: "1rem 0" }}>
      <a
        href="https://scrabble-helper.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        <button>View Live</button>
      </a>
    </div>
    <div className="case-study-buttons" style={{ margin: "1rem 0" }}>
      <a
        href="https://github.com/w0nght/scrabble_helper"
        target="_blank"
        rel="noreferrer"
      >
        <button>Feel free to steal my code</button>
      </a>
    </div>
  </>
);

export default function CaseStudyScrabbleHelper() {
  return (
    <section id="case-study" className="case-study">
      <h1>Scrabble Helper Case Study</h1>

      {/* Tech Tags */}
      <div className="tags">
        {techTags.map((t) => (
          <Tag key={t.label} {...t} />
        ))}
      </div>

      {/* Content Sections */}
      <Background />
      <Process />
      <Outcome />

      {/* Screenshots / Demo */}
      <h2>📸 Screenshots/Demo</h2>
      <CustomGallery images={scrabbleHelperImages} />
    </section>
  );
}
