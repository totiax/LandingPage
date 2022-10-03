import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import "../assets/css/Home.css";

export default function Home() {
  return (
    <div id="Home">
      <Header></Header>
      <Carousel></Carousel>
    </div>
  );
}
