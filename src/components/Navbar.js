import { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

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
    setIsOpen(false);
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
        {/* <a href="/#about">About Me</a> */}
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
      </div>
      <FaBars className="hamburger" onClick={() => setIsOpen(!isOpen)} />
    </nav>
  );
}
