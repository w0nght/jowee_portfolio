import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import useGATracking from "../hooks/useGATracking";

export default function Hero() {
  const { trackCVDownload } = useGATracking();

  const handleCVDownload = () => {
    trackCVDownload();
  };

  return (
    <section id="home" className="hero">
      <h1>Hi, I’m Joey!</h1>
      <h2>
        A <span className="highlight">Software Engineer</span> passionate about
        building clean, interactive, and accessible web experiences.
      </h2>
      <p>
        Frontend-focused, full-stack capable. Turning ideas into helpful tools.
      </p>
      <div className="hero-buttons">
        <a href="/#projects">
          <button>View Projects</button>
        </a>
        <a href="/Joey Wong CV 2025.pdf" download onClick={handleCVDownload}>
          <button>Download CV</button>
        </a>
      </div>

      {/* Social Links */}
      <p>Feel free to reach out and collaborate.</p>
      <div className="hero-social">
        <a
          href="https://github.com/w0nght"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/joey-wong-4-work/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          onClick={() =>
            window.gtag &&
            window.gtag("event", "click", {
              event_category: "outbound",
              event_label: "LinkedIn Profile",
              transport_type: "beacon",
            })
          }
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:joeywong4work@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Email"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}
