"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-white" : "navbar-transparent"}`}>
      <div className="navbar-container">

        {/* LOGO */}
        <div className="navbar-logo">
          <span className="logo-en">cenomi</span>
          <span className="logo-ar">سينومي</span>
        </div>

        {/* NAV LINKS */}
        <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <a href="#">ABOUT US</a>

          <a href="#">
            MALLS LOCATOR <span className="caret">⌄</span>
          </a>

          <a href="#">
            INVESTORS CORNER <span className="caret">⌄</span>
          </a>

          <a href="#">CAREERS</a>
          <a href="#">CONTACT US</a>
          <a href="#">OPPORTUNITIES & NEW DEVELOPMENTS</a>

          <span className="nav-separator">|</span>

          <a href="#" className="lang-switch">
            <img src="/globe.svg" alt="Language" width={16} height={16} className="globe-icon" />
            عربي
          </a>
        </nav>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </header>
  );
}