import React from "react";
import "../assets/css/Footer.css";
import logo from "../assets/statics/logo_25w.png";
import insta from "../assets/statics/Iconsimple-instagram.svg";
import face from "../assets/statics/Iconionic-logo-facebook.svg";
import twiter from "../assets/statics/Iconsimple-twitter.svg";
import you from "../assets/statics/Iconsimple-youtube.svg";
import In from "../assets/statics/Iconawesome-linkedin-in.svg";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="OrderFooter">
        <div className="CopyR">
          <a href="#Home">
            <img src={logo} alt="" />
          </a>
          <br />
          <p>2020 © All rights reserved.</p>
        </div>
        <div className="Info">
          <div className="ILeft">
            <a href="#Services">Service</a>
            <a href="#AboutUs">About</a>
            <a href="#Products">Products</a>
          </div>
          <div className="IRight">
            <a href="#MoreDetails">Details</a>

            <a href="#Contact">Contact</a>
          </div>
        </div>
        <div className="Follow">
          <div className="Tit">
            <h5>Follow us</h5>
          </div>
          <div className="Redes">
            <img className="hover" src={insta} alt="" />
            <img className="hover" src={face} alt="" />
            <img className="hover" src={twiter} alt="" />
            <img className="hover" src={you} alt="" />
            <img className="hover" src={In} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
