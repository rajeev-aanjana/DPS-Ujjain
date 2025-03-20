import React, { useState } from "react";
import "./Cards.css";
import dots from "../../assets/dots-white.svg";

function Cards() {
  const [showForm, setShowForm] = useState(false);
  const [showFeeStructure, setShowFeeStructure] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
    setShowFeeStructure(false);
  };

  const handleOpenFeeStructure = () => {
    setShowFeeStructure(true);
    setShowForm(false);
  };

  const handleClose = () => {
    setShowForm(false);
    setShowFeeStructure(false);
  };

  return (
    <>
      <div id="cards-container" name="academics">
        <div className="card" id="card1">
          <div className="overlay">
            <h4>Academics</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="card" id="card2">
          <div className="overlay">
            <h4>Sports</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="card" id="card3">
          <div className="overlay">
            <h4>Cultural</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>

      <div id="green-div" name="admission">
        <div className="green-div-content">
          <h4>Admission Open 2025-26</h4>
          <div className="btns">
            <button onClick={handleOpenForm}>Apply Online for Class Nursery to Prep</button>
            <button onClick={handleOpenForm}>Apply Online For Class 1st to 12th</button>
            <button onClick={handleOpenFeeStructure}>See Fee Structure 2025-26</button>
          </div>
        </div>
      </div>

      {/* Registration Form Popup */}
      {showForm && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Admission Form</h2>
            <form>
              <label>Full Name:</label>
              <input type="text" placeholder="Enter your full name" required />

              <label>Email:</label>
              <input type="email" placeholder="Enter your email" required />

              <label>Phone:</label>
              <input type="tel" placeholder="Enter your phone number" required />

              <label>Class Applying For:</label>
              <select>
                <option value="Nursery">Nursery</option>
                <option value="Prep">Prep</option>
                <option value="1st">1st</option>
                <option value="1st">2nd</option>
                <option value="1st">3rd</option>
                <option value="1st">4th</option>
                <option value="1st">5th</option>
                <option value="1st">6th</option>
                <option value="1st">7th</option>
                <option value="1st">8th</option>
                <option value="1st">9th</option>
                <option value="12th">10th</option>
                <option value="12th">11th</option>
                <option value="12th">12th</option>
              </select>
              
              <button type="submit">Submit</button>
            </form>
            <button className="close-btn" onClick={handleClose}>Close</button>
          </div>
        </div>
      )}

      {/* Fee Structure Popup */}
      {showFeeStructure && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Fee Structure 2025-26</h2>
            <p>Details about the fee structure will be displayed here.</p>
            <button className="close-btn" onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Cards;
