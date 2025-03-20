import React from "react";
import "./About.css";
import image1 from "../../assets/image1.jpg";
import img6 from "../../assets/img6.jpg";

function About() {
  return (
    <>
      <div id="about-us">
        <img src={image1} alt="" />
        <div id="about-content">
          <h3>Delhi Public School Ujjain</h3>
          <p>
            At DPS Ujjain, we are dedicated to redefining education with a blend
            of innovation, technology, and a human-centered approach to
            learning. Our goal is to provide an environment that fosters
            intellectual curiosity, creativity, and holistic development in
            every child, preparing them to thrive in an ever-evolving world.
          </p>
          <p>
            With a commitment to the ethos of "Service Before Self," we empower
            students to acquire knowledge and skills that shape them into
            responsible, lifelong learners. Our emphasis on experiment-oriented
            and contemporary teaching methods ensures that each student and
            mentor evolves in an atmosphere of excellence and compassion.
          </p>
          <p>
            We invite you to visit DPS Ujjain and witness our vision of
            transformational education—a journey where academic achievement
            meets character development in a truly nurturing environment.
          </p>
        </div>
        <img src={img6} alt="" />
      </div>
     
    </>
  );
}

export default About;
