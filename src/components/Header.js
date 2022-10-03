import React from "react";
import logo from "../assets/statics/logo_25w.png";
import "../assets/css/Header.css";
import "../assets/css/Responsive.css";

export default function Header() {
  return (
    <div className="Header">
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <img src={logo} alt="" className="picture" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end "
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#Home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#AboutUs">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Products">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#MoreDetails">
                  Details
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
