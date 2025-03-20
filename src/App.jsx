import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

// import logoIcon from "./assets/logo.png";
import logoIcon from "./assets/logo_b&w.png";
import Cursor from "./Components/Cursor/Cursor";
import Vision from "./Components/Vision/Vision";
import Title from "./Components/Title/Title";
import Gallery from "./Components/Gallery/Gallery";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { Route, Router, Routes } from "react-router-dom";
import FullGallery from "./Components/Gallery/FullGallery";

function App() {
  const [logo, setLogo] = useState(logoIcon); // Default logo
  const [logoSize, setLogoSize] = useState(1);

  return (
    <>
    <Navbar logo={logo} logoSize={logoSize} />
    <Cursor />
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Hero setLogo={setLogo} setLogoSize={setLogoSize} />
            <Vision />
            <div className="bg">
              <Title subTitle="Gallery" title="Campus Photos" />
              <Gallery />
              <Title subTitle="Testimonials" title="What Student Says" />
              <Testimonials />
              <Title subTitle="Get in Touch" title="Contact Us" />
              <Contact />
              <Footer />
            </div>
          </>
        }
      />
      <Route path="/full-gallery" element={
        <FullGallery setLogo={setLogo} setLogoSize={setLogoSize} />} />
    </Routes>
  </>
  );
}

export default App;
