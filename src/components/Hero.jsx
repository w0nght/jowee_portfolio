import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import useGATracking from "../hooks/useGATracking";
import { SOCIAL_LINKS } from "../data/socialLinks";

const ICONS = {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
};

export default function Hero() {
  const { trackCVDownload, trackSocialClick } = useGATracking();

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
        <a href="/Joey Wong CV 2026.pdf" download onClick={handleCVDownload}>
          <button>Download CV</button>
        </a>
      </div>

      {/* Social Links */}
      <p>Feel free to reach out and collaborate.</p>
      <div className="hero-social">
        {Object.entries(SOCIAL_LINKS).map(([key, { url, label, icon }]) => {
          const Icon = ICONS[icon];
          return (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              aria-label={label}
              onClick={() => trackSocialClick(key, url)}
            >
              <Icon />
            </a>
          );
        })}
      </div>
    </section>
  );
}
