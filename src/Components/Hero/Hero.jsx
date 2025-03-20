import React, { useEffect } from "react";
import "./Hero.css";
import video from "../../assets/school_vdo.mp4";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Importing ScrollTrigger plugin
import logoNew from "../../assets/logo.png";
import logo from "../../assets/logo_b&w.png";

import About from "./About";
import Cards from "../Cards/Cards.jsx"
import {Link as ScrollLink } from "react-scroll";

gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

function Hero({ setLogo, setLogoSize }) {
  useEffect(() => {
    gsap.to("#main", {
      //   backgroundColor: "#000",
      backgroundColor: "#fff",
      scrollTrigger: {
        trigger: "#main",
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
        // markers: true,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress > 0.2) {
            setLogo(logoNew);
            setLogoSize(1.2);
          } else {
            setLogo(logo);
            setLogoSize(1);
          }
        },
      },
    });
  }, [setLogo]);

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
      <video autoPlay loop muted src={video}></video>
      <div id="main" name="hero">
        <div id="page1">
          <h1>WELCOME TO DPS UJJAIN</h1>
          <h2>We Ensure better education for a better world</h2>
          <button className="
          btn"> <ScrollLink to="about-us" smooth={true} offset={-310} duration={500} onClick={()=> handleNavigation("about-us")}>Explore more</ScrollLink></button>
        </div>
        <div id="page2">
          <div id="scroller">
            <div id="scroll-in">
              <h4>DELHI</h4>
              <h4>PUBLIC</h4>
              <h4>SCHOOL</h4>
              <h4>UJJAIN</h4>
            </div>
            <div id="scroll-in">
              <h4>DELHI</h4>
              <h4>PUBLIC</h4>
              <h4>SCHOOL</h4>
              <h4>UJJAIN</h4>
            </div>
          </div>
          <About />
          <Cards />

        </div>
      </div>
    </>
  );
}

export default Hero;
