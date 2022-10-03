import React from "react";
import "../assets/css/Service.css";
import icon1 from "../assets/statics/Iconawesome-globe-americas.png";
import icon2 from "../assets/statics/Iconawesome-cloud-upload-alt.png";
import icon3 from "../assets/statics/Iconawesome-headset.png";
import icon4 from "../assets/statics/Iconawesome-user-friends.png";

export default function Services() {
  return (
    <div className="serv" id="Services">
      <div className="Stop">
        <div className="title">
          <h2>Services</h2>
        </div>

        <div className="subti">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
            gravida felis, id tempor ex. Suspendisse congue purus eu neque
            auctor, eget dictum ipsum facilisis. Sed scelerisque sodales lorem,
          </p>
        </div>
      </div>

      <div className="Sbottom">
        <div className="card1">
          <img src={icon1} alt="" />
          <h4>Stet clita </h4>
          <h4>kasd gubergren</h4>
        </div>
        <div className="card2">
          <img src={icon2} alt="" />
          <h4>At vero eos et </h4>
          <h4>accusam</h4>
        </div>
        <div className="card3">
          <img src={icon3} alt="" />
          <h4>Sed ut </h4>
          <h4>perspiciatis unde</h4>
        </div>
        <div className="card4">
          <img src={icon4} alt="" />
          <h4>Lorem ipsum dolor </h4>
          <h4>sit amet</h4>
        </div>
      </div>
    </div>
  );
}
