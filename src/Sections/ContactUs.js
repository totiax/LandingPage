import React from "react";
import pic from "../assets/statics/imageC.png";
import "../assets/css/ContactUs.css";
import "../assets/css/Responsive.css";

export default function ContactUs() {
  return (
    <div className="contact" id="Contact">
      <div className="ContOrder">
        <div className="contLeft">
          <h2>Get in touch </h2>
          <h2 className="Subt">We are hiring!</h2>
          <form
            action="https://formsubmit.co/info@25watts.com.ar"
            method="POST"
          >
            <input type="text" placeholder="Name" name="name" required />
            <input type="text" placeholder="info@25watts.com.ar" />
            <input type="text" placeholder="Phone" name="phone" required />
            <input type="text" placeholder="Message" name="message" required />
            <input type="submit" className="submit" placeholder="Send" />
          </form>
        </div>
        <div className="contRight">
          <img src={pic} alt="" />
        </div>
      </div>
    </div>
  );
}
