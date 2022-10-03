import React from "react";
import imgIcon from "../assets/statics/Iconawesome-anchor.svg";
import imgIcon2 from "../assets/statics/Iconawesome-bookmark.svg";
import imgIcon3 from "../assets/statics/Iconawesome-brush.svg";
import imgIcon4 from "../assets/statics/Iconawesome-bell.svg";
import imgIcon5 from "../assets/statics/Iconawesome-bandcamp.svg";
import imgIcon6 from "../assets/statics/Iconawesome-box-open.svg";
import "../assets/css/MoreDetails.css";

export default function MoreDitails() {
  return (
    <div className="MoreDetails" id="MoreDetails">
      <div className="ContTop">
        <h2>More Details</h2>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
          gravida felis, id tempor ex. Suspendisse congue purus eu neque auctor,
          eget dictum ipsum facilisis. Sed scelerisque sodales lorem,
        </p>
      </div>
      <br />
      <div className="ContBottom">
        <div className="ContBR">
          <div className="flex">
            <img src={imgIcon} alt="" />

            <p>
              Donec egestas tortor quis turpis finibus vestibulum vel nec ex.
              Nunc sed velit ullamcorper
            </p>
          </div>
          <div className="flex">
            <img src={imgIcon2} alt="" />
            <p>
              Donec egestas tortor quis turpis finibus vestibulum vel nec ex.
              Nunc sed velit ullamcorper.
            </p>
          </div>
          <div className="flex">
            <img src={imgIcon3} alt="" />

            <p>Donec egestas tortor quis turpis finibus.</p>
          </div>
        </div>
        <div className="ContBL">
          <div className="flex">
            <img src={imgIcon4} alt="" />
            <p>
              Donec egestas tortor quis turpis finibus vestibulum vel nec ex.
              Nunc sed velit ullamcorper.
            </p>
          </div>
          <div className="flex">
            <img src={imgIcon5} alt="" />
            <p>Donec egestas tortor quis turpis finibus</p>
          </div>
          <div className="flex">
            <img src={imgIcon6} alt="" />
            <p>
              Donec egestas tortor quis turpis finibu vestibulum vel nec ex.
              Nunc sed velit ullamcorper.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
