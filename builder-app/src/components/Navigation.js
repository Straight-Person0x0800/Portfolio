import { useState, useEffect } from "react";
import validateStyles from "../utils/checkJsonKeys";

function Navigation({ logo, style, links, color }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track mobile menu state
  const [isStyleValid, setIsStyleValid] = useState(true); // Track style validity

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle menu open/close state
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Explicitly close the menu
  };

  const requiredStyles = [
    "nav",
    "container",
    "logo",
    "navLinks",
    "link",
    "mobileMenu",
    "mobileLink",
  ];

  useEffect(() => {
    // Validate styles on mount or when style prop changes
    const valid = validateStyles(style, requiredStyles);
    setIsStyleValid(valid);
  }, [style]);

  if (!isStyleValid) {
    return (
      <div className="bg-red-100 text-red-600 p-4">
        <p>Error: Navigation component styles are missing or invalid.</p>
      </div>
    );
  }

  return (
    <nav className={`w-full bg-[${color.primaryColor}] ${style.nav}`}>
      <div className={style.container}>
        {/* Logo Part */}
        <h1 className={`text-[${color.fontColor}] ${style.logo}`}>{logo}</h1>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-8 w-8 text-[${color.fontColor}]`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Navigation Links */}
        <ul id="nav-links" className={style.navLinks}>
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className={`text-[${color.fontColor}] hover:text-[${color.secondaryColor}] ${style.link}`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Menu */}
        <div
          id="mobile-menu"
          className={`${isMenuOpen ? "block" : "hidden"} bg-[${
            color.primaryColor
          }]  ${style.mobileMenu}`}
        >
          <ul>
            {links.map((link, index) => (
              <li key={index} onClick={closeMenu}>
                {" "}
                {/* Close menu on link click */}
                <a
                  href={link.href}
                  className={`text-[${color.fontColor}] hover:text-[${color.secondaryColor}]  ${style.mobileLink}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Close Menu on Outside Click */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-transparent"
            onClick={closeMenu}
            aria-hidden="true"
          ></div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
