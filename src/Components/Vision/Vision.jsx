import React from "react";
import "./Vision.css";
import visionImg from "../../assets/img7.webp";

function Vision() {
  return (
    <div className="vision">
      <div className="vision-left">
        <img src={visionImg} alt="" className="vision_img" />
      </div>
      <div className="vision-right">
        <h3>Our Vision</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          We believe in nurturing every student within a supportive and
          inclusive environment that promotes holistic development. Our vision
          is to create ‘Happy Learners’ by providing a comprehensive educational
          experience that addresses not only academic excellence but also
          emotional, social, and physical well-being.
        </p>
        <p>
          Through a blend of innovative teaching methods, extracurricular
          activities, and personalized support, we empower students to explore
          their passions and develop critical skills. We strive to create a
          vibrant community where every child can thrive academically and
          personally, instilling a lifelong love for learning. Our goal is to
          equip students not just with knowledge, but with the confidence and
          resilience to succeed in an ever-changing world.
        </p>
        <p>
          We are focused on our mission of making quality education with all
          round personality development of our students more accessible and
          affordable so many more students can pursue their dream of excellence.
          It is a mission we believe will help make the world a better place. We
          dedicated ourselves at Delhi Public School to create human capital for
          our country and endow the world with beautiful minds. We believe that
          when our students succeed, countries prosper, and societies benefit.
        </p>
      </div>
    </div>
  );
}

export default Vision;
