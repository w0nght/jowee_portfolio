import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const MENU_LINKS = [
  { label: "About Me", href: "/about" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  {
    label: "Download CV",
    href: "/Joey Wong CV 2025.pdf",
    isBtn: true,
    download: true,
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

  useEffect(() => {
    if (!isSmallScreen) setIsOpen(false);
  }, [isSmallScreen]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuRef]);

  const handleMenuClick = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={handleMenuClick}></div>}

      <nav className="navbar">
        <a href="/" className="nav-logo" aria-label="Home">
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
                onClick={handleMenuClick}
              >
                {link.label}
              </a>
            ) : (
              <a key={link.label} href={link.href} onClick={handleMenuClick}>
                {link.label}
              </a>
            )
          )}

          {isSmallScreen && (
            <button className="nav-btn nav-close-btn" onClick={handleMenuClick}>
              <FaTimes />
            </button>
          )}
        </div>

        {isSmallScreen && (
          <button className="nav-btn" onClick={handleMenuClick}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        )}
      </nav>
    </>
  );
}
