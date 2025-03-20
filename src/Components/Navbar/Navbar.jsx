import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link as ScrollLink } from "react-scroll";
import menu_icon from "../../assets/menu.png";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar({ logo, logoSize }) {
  const [navbarStyle, setNavbarStyle] = useState({
    backgroundColor: "transparent",
    height: "120px",
  });

  const [hideNavbar, setHideNavbar] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavbarStyle({
          backgroundColor: "#fff",
          color: "#000",
          height: "110px",
        });
      } else {
        setNavbarStyle({
          backgroundColor: "transparent",
          height: "120px",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle navigation from other pages
  const handleNavigation = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/"); // Navigate to the homepage first
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 100); // Delay to allow the homepage to load
    }
  };

  return (
    <>
      <nav id="nav" style={navbarStyle}>
        {/* Clicking Logo Takes to Home Page */}
        <img
          src={logo}
          alt="Logo"
          className="logo"
          style={{ transform: `scale(${logoSize})`, cursor: "pointer" }}
          onClick={() => navigate("/")}
        />

        {/* Navigation Menu */}
        <ul className={hideNavbar ? "hide-mobile-menu" : ""}>
          <li>
            <ScrollLink
              to="hero"
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => handleNavigation("hero")}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about-us"
              smooth={true}
              offset={-300}
              duration={500}
              onClick={() => handleNavigation("about-us")}
            >
              About Us
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="admission"
              smooth={true}
              offset={-150}
              duration={500}
              onClick={() => handleNavigation("admission")}
            >
              Admissions
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="academics"
              smooth={true}
              offset={-250}
              duration={500}
              onClick={() => handleNavigation("academics")}
            >
              Academics
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="gallery"
              smooth={true}
              offset={-280}
              duration={500}
              onClick={() => handleNavigation("gallery")}
            >
              Beyond Classroom
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className="contact-btn"
              to="contact"
              smooth={true}
              offset={-260}
              duration={500}
              onClick={() => handleNavigation("contact")}
            >
              Contact Us
            </ScrollLink>
          </li>
        </ul>

        {/* Menu Icon for Mobile */}
        <img onClick={() => setHideNavbar(!hideNavbar)} src={menu_icon} alt="Menu" className="menu-icon" />
      </nav>
    </>
  );
}

export default Navbar;
