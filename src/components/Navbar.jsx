import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const { trackCVDownload } = useGATracking();

const handleCVDownload = () => {
  trackCVDownload();
};

const MENU_LINKS = [
  { label: "About Me", href: "/about" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  {
    label: "Download CV",
    href: "/Joey Wong CV 2025.pdf",
    isBtn: true,
    download: true,
    onClick: handleCVDownload,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // close menu if screen becomes large
  useEffect(() => {
    if (!isSmallScreen) setIsOpen(false);
  }, [isSmallScreen]);

  useEffect(() => {
    // Close menu if clicking outside of it
    function handleClickOutside(event) {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    // only listens when the menu is actually open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      {/* Overlay */}
      {isOpen && isSmallScreen && (
        <div className="overlay" onClick={toggleMenu}></div>
      )}

      <nav className="navbar">
        <a href="/" className="nav-logo" aria-label="Home">
          <img
            src="/mylogo4_cropped.png"
            className="logo-img"
            alt="Joey Wong Logo"
          />
          <svg
            className="logo-svg"
            viewBox="0 0 180 36"
            width="200"
            height="40"
            role="img"
            aria-hidden="true"
          >
            <text x="0" y="26" className="logo-stroke">
              {"<"}JW {"/>"}
            </text>
          </svg>
        </a>

        <div className={`nav-links ${isOpen ? "open" : ""}`} ref={menuRef}>
          {MENU_LINKS.map((link) =>
            link.isBtn ? (
              <a
                key={link.label}
                href={link.href}
                className="btn"
                download={link.download}
                onClick={toggleMenu}
              >
                {link.label}
              </a>
            ) : (
              <a key={link.label} href={link.href} onClick={toggleMenu}>
                {link.label}
              </a>
            )
          )}
        </div>

        {isSmallScreen && (
          <button className="nav-btn" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        )}
      </nav>
    </>
  );
}
