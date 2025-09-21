import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= 768);
    }

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isSmallScreen) {
      setIsOpen(false); // Close menu when screen size changes to large
    }
  }, [isSmallScreen]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <a href="/#home" className="nav-logo" aria-label="Home">
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
        {/* <a href="/#home">Home</a> */}
        <a href="/about" onClick={handleMenuClick}>
          About Me
        </a>
        <a href="/#projects" onClick={handleMenuClick}>
          Projects
        </a>
        <a href="/#experience" onClick={handleMenuClick}>
          Experience
        </a>
        {/* <a href="/#contact">Contact</a> */}
        <a
          href="/Joey Wong CV 2025.pdf"
          className="btn"
          download
          onClick={handleMenuClick}
        >
          Download CV
        </a>
        {isSmallScreen && (
          <button className="nav-btn nav-close-btn" onClick={handleMenuClick}>
            <FaTimes />
          </button>
        )}
      </div>
      {isSmallScreen &&
        (isOpen ? (
          <button className="nav-btn" onClick={handleMenuClick}>
            <FaTimes />
          </button>
        ) : (
          <button className="nav-btn" onClick={handleMenuClick}>
            <FaBars />
          </button>
        ))}
    </nav>
  );
}
