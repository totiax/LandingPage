import React from "react";
import img from "../assets/statics/image.png";
import "../assets/css/AboutUs.css";

export default function AboutUs() {
  return (
    <div className="order" id="AboutUs">
      <div className="Oleft">
        <img src={img} alt="" />
      </div>
      <div className="Oright">
        <h2>About us </h2>
        <h2 className="orange">We Help Businesses</h2>
        <br />

        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat.
        </p>
        <br />
        <div className="btn">
          <button>More info</button>
        </div>
      </div>
    </div>
  );
}
