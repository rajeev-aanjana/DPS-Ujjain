import React, { useEffect } from 'react';
import './FullGallery.css';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Importing ScrollTrigger plugin
import logoNew from "../../assets/logo.png";
import logo from "../../assets/logo_b&w.png";

// import Navbar from "../Navbar/Navbar.jsx"
import Footer from "../Footer/Footer.jsx"
import gallery1 from '../../assets/dpsu2.jpg';
import gallery2 from '../../assets/image1.jpg';
import gallery3 from '../../assets/images.jpg';
import gallery4 from '../../assets/dpsu.jpg';
import gallery5 from '../../assets/logo.png';
import gallery6 from '../../assets/experiment.jpg';
import gallery7 from '../../assets/yoga.jpg';
import gallery8 from '../../assets/ground.jpg';
import gallery9 from '../../assets/img2.jpg';
import gallery10 from '../../assets/img3.jpg';
import gallery11 from '../../assets/img4.jpg';
import gallery12 from '../../assets/img5.jpg';
import gallery13 from '../../assets/img6.jpg';
import gallery14 from '../../assets/academics.jpg';
import gallery15 from '../../assets/sports.jpg';
import gallery16 from '../../assets/scl_temp.jpg';
import gallery17 from '../../assets/test2.jpg';
import gallery18 from '../../assets/test3.jpg';
import gallery19 from '../../assets/test4.jpg';
import gallery20 from '../../assets/test5.jpg';

gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

function FullGallery({ setLogo, setLogoSize }) {

  setLogo(logoNew)
  return (
    <>
      {/* <Navbar /> */}
      <div className='full-gallery'>
        <h2>DPS School Photo Gallery</h2>
        <div className="gallery-grid">
          <img src={gallery1} alt="Gallery" />
          <img src={gallery2} alt="Gallery" />
          <img src={gallery3} alt="Gallery" />
          <img src={gallery4} alt="Gallery" />
          <img src={gallery5} alt="Gallery" />
          <img src={gallery6} alt="Gallery" />
          <img src={gallery7} alt="Gallery" />
          <img src={gallery8} alt="Gallery" />
          <img src={gallery9} alt="Gallery" />
          <img src={gallery10} alt="Gallery" />
          <img src={gallery11} alt="Gallery" />
          <img src={gallery12} alt="Gallery" />
          <img src={gallery13} alt="Gallery" />
          <img src={gallery14} alt="Gallery" />
          <img src={gallery15} alt="Gallery" />
          <img src={gallery16} alt="Gallery" />
          <img src={gallery17} alt="Gallery" />
          <img src={gallery18} alt="Gallery" />
          <img src={gallery19} alt="Gallery" />
          <img src={gallery20} alt="Gallery" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FullGallery;
