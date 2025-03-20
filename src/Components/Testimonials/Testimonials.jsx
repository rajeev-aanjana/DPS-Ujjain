import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-circle.png";
import back_icon from "../../assets/back-circle.png";
import user1 from "../../assets/user1.png";

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = ()=>{
        if(tx > -50){
            tx -= 20;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = ()=>{
        if(tx < 0){
            tx += 20;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <div className="testimonials">
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward} />
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
                <div className="">
                  <h3>Rajeev Anjana</h3>
                  <span>Class 12th, PCM</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                aliquam laboriosam quasi esse tenetur illo debitis totam
                doloribus dignissimos perferendis, accusantium ullam delectus
                ducimus explicabo.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
                <div className="">
                  <h3>Rajeev Anjana</h3>
                  <span>Class 12th, PCM</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                aliquam laboriosam quasi esse tenetur illo debitis totam
                doloribus dignissimos perferendis, accusantium ullam delectus
                ducimus explicabo.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
                <div className="">
                  <h3>Rajeev Anjana</h3>
                  <span>Class 12th, PCM</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                aliquam laboriosam quasi esse tenetur illo debitis totam
                doloribus dignissimos perferendis, accusantium ullam delectus
                ducimus explicabo.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
                <div className="">
                  <h3>Rajeev Anjana</h3>
                  <span>Class 12th, PCM</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                aliquam laboriosam quasi esse tenetur illo debitis totam
                doloribus dignissimos perferendis, accusantium ullam delectus
                ducimus explicabo.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
                <div className="">
                  <h3>Rajeev Anjana</h3>
                  <span>Class 12th, PCM</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                aliquam laboriosam quasi esse tenetur illo debitis totam
                doloribus dignissimos perferendis, accusantium ullam delectus
                ducimus explicabo.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
