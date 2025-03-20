import React from 'react'
import "./Contact.css"
// import msg_icon from "../../assets/msg.png";
import call_icon from "../../assets/call.png";
import email_icon from "../../assets/email.png";
import address_icon from "../../assets/address.png";
import arrow from "../../assets/arrow.png";

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4f9fc240-15dc-4c99-8fe9-c699dbd3e1ee");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message</h3>
        <p>Feel free to reach out through contact form or find our contact 
            information below. your feedback, questions, and suggestions are 
            important to us as we strive to provide exceptional service to our 
            school community.
        </p>
        <ul>
            <li><img src={call_icon} alt="" />0734-3535458</li>
            <li><img src={email_icon} alt="" />dps.ujjain@gmail.com</li>
            <li><img src={address_icon} alt="" />DPS gram Lalpur Ujjain, Madhya Pradesh</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required />
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required />
            <label>Write your messages here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
