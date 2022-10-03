import React, { useEffect, useState } from "react";
import Home from "./Sections/Home";
import AboutUs from "./Sections/AboutUs";
import "./assets/css/App.css";
import Services from "./Sections/Services";
import Products from "./Sections/Products";
import MoreDetails from "./Sections/MoreDetails";
import ContactUs from "./Sections/ContactUs";
import Footer from "./Sections/Footer";
import "./assets/css/Responsive.css";

function App() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossOrigin="anonymous"
      />
      <div className="box">
        <div className="content">
          <Home></Home>
          <AboutUs></AboutUs>
          <Services></Services>
          <Products></Products>
          <MoreDetails></MoreDetails>
          <ContactUs></ContactUs>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
