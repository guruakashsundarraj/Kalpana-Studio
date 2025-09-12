import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 100) {
        setShowNavbar(false); // hide on scroll down
      } else {
        setShowNavbar(true); // show on scroll up
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleMouseLeave = () => {
    setPosition((prev) => ({ ...prev, opacity: 0 }));
    setActiveDropdown(null);
  };

  return (
    <nav
      className={`nav ${showNavbar ? "nav-visible" : "nav-hidden"}`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="nav-logo">
      <Link to="/">
      <img src="/logo.png" alt="Company Logo" className="logo-img" />
      </Link>
      </div>
      <ul className="nav-menu">
        <NavItem setPosition={setPosition}>
          <Link to="/">Home</Link>
        </NavItem>

        <DropdownNavItem
          title="Portfolio"
          path="/explore"
          setPosition={setPosition}
          activeDropdown={activeDropdown}
          setActiveDropdown={setActiveDropdown}
          id="photography"
          items={[
            { label: "Wedding Photography", path: "/wedding" },
            { label: "Engagement", path: "/engagement" },
            { label: "Birthday Photography", path: "/birthday" },
            { label: "Family Photoshoot", path: "/family" },
            { label: "New Baby Born Photography", path: "/newborn" },
          ]}
        />

        <DropdownNavItem
          title="Gifts"
          path="/gift"
          setPosition={setPosition}
          activeDropdown={activeDropdown}
          setActiveDropdown={setActiveDropdown}
          id="gifts"
          items={[
            { label: "Photo Mug", path: "/mug" },
            { label: "Photo Frame", path: "/frame" },
            { label: "Clock", path: "/clock" },
            { label: "Keychain", path: "/keychain" },
          ]}
        />

           <DropdownNavItem
           title="About Us"
           path="/about"
           setPosition={setPosition}
           activeDropdown={activeDropdown}
           setActiveDropdown={setActiveDropdown}
           id="about"
           items={[
            { label: "FAQs", path: "/faqs" },
        ]}
  />
        <NavItem setPosition={setPosition}>
          <Link to="/contact" className="nav-contact">Contact</Link>
        </NavItem>

        <motion.li
          className="nav-slider"
          animate={position}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </ul>
    </nav>
  );
}

// ------------------------
const NavItem = ({ children, setPosition }) => {
  const ref = useRef(null);
  const handleEnter = () => {
    if (!ref.current) return;
    const { width } = ref.current.getBoundingClientRect();
    setPosition({ left: ref.current.offsetLeft, width, opacity: 1 });
  };
  return (
    <li ref={ref} onMouseEnter={handleEnter} className="nav-item">
      {children}
    </li>
  );
};

// ------------------------
const DropdownNavItem = ({
  title,
  path,
  items,
  setPosition,
  activeDropdown,
  setActiveDropdown,
  id,
}) => {
  const ref = useRef(null);
  const handleEnter = () => {
    if (!ref.current) return;
    const { width } = ref.current.getBoundingClientRect();
    setPosition({ left: ref.current.offsetLeft, width, opacity: 1 });
    setActiveDropdown(id);
  };

  return (
    <li className="nav-item" ref={ref} onMouseEnter={handleEnter}>
      <Link to={path}>{title}</Link>
      {activeDropdown === id && (
        <div className="dropdown">
          {items.map((item, index) => (
            <Link key={index} to={item.path} className="dropdown-item">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
};

export default Navbar;
