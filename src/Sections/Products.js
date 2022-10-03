import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/Products.css";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="Products" id="Products">
        <div className="OrderProducts">
          <h2 className="title"> Products </h2>
          <h2>In eget tortor tempor mollis purus</h2>
          <br />

          <Slider {...settings}>
            <div className="Pcard OrderContent">
              <h4>Aliquam at dui lorem ipsum</h4>
              <br />
              <ul>
                <li>- Ut mattis gravida efficitur.</li>
                <li>Ut feugiat vehicula nibh, efficitur laoreet justo. </li>
                <li>Molestie id. Integer varius enim sit amet egestas.</li>
                <li>Ut mattis gravida efficitur.</li>
              </ul>
            </div>
            <div className="Pcard1 OrderContent">
              <h4>Aliquam at dui lorem ipsum</h4>
              <br />
              <ul>
                <li>- Ut mattis gravida efficitur.</li>
                <li>Ut feugiat vehicula nibh, efficitur laoreet justo. </li>
                <li>Molestie id. Integer varius enim sit amet egestas.</li>
                <li>Ut mattis gravida efficitur.</li>
              </ul>
            </div>
            <div className="Pcard2 OrderContent">
              <h4>Aliquam at dui lorem ipsum</h4>
              <br />
              <ul>
                <li>- Ut mattis gravida efficitur.</li>
                <li>Ut feugiat vehicula nibh, efficitur laoreet justo. </li>
                <li>Molestie id. Integer varius enim sit amet egestas.</li>
                <li>Ut mattis gravida efficitur.</li>
              </ul>
            </div>
            <div className="Pcard3 OrderContent">
              <h4>Aliquam at dui lorem ipsum</h4>
              <br />
              <ul>
                <li>- Ut mattis gravida efficitur.</li>
                <li>Ut feugiat vehicula nibh, efficitur laoreet justo. </li>
                <li>Molestie id. Integer varius enim sit amet egestas.</li>
                <li>Ut mattis gravida efficitur.</li>
              </ul>
            </div>
            <div className="Pcard4 OrderContent">
              <h4>Aliquam at dui lorem ipsum</h4>
              <br />
              <ul>
                <li>- Ut mattis gravida efficitur.</li>
                <li>Ut feugiat vehicula nibh, efficitur laoreet justo. </li>
                <li>Molestie id. Integer varius enim sit amet egestas.</li>
                <li>Ut mattis gravida efficitur.</li>
              </ul>
            </div>
            <div className="Pcard5 OrderContent">
              <h4>Aliquam at dui lorem ipsum</h4>
              <br />
              <ul>
                <li>- Ut mattis gravida efficitur.</li>
                <li>Ut feugiat vehicula nibh, efficitur laoreet justo. </li>
                <li>Molestie id. Integer varius enim sit amet egestas.</li>
                <li>Ut mattis gravida efficitur.</li>
              </ul>
            </div>
            <div className="Pcard6 OrderContent">
              <h4>Aliquam at dui lorem ipsum</h4>
              <br />
              <ul>
                <li>- Ut mattis gravida efficitur.</li>
                <li>Ut feugiat vehicula nibh, efficitur laoreet justo. </li>
                <li>Molestie id. Integer varius enim sit amet egestas.</li>
                <li>Ut mattis gravida efficitur.</li>
              </ul>
            </div>
            <div className="Pcard7 OrderContent">
              <h4>Aliquam at dui lorem ipsum</h4>
              <br />
              <ul>
                <li>- Ut mattis gravida efficitur.</li>
                <li>Ut feugiat vehicula nibh, efficitur laoreet justo. </li>
                <li>Molestie id. Integer varius enim sit amet egestas.</li>
                <li>Ut mattis gravida efficitur.</li>
              </ul>
            </div>
            <div className="Pcard8 OrderContent">
              <h4>Aliquam at dui lorem ipsum</h4>
              <br />
              <ul>
                <li>- Ut mattis gravida efficitur.</li>
                <li>Ut feugiat vehicula nibh, efficitur laoreet justo. </li>
                <li>Molestie id. Integer varius enim sit amet egestas.</li>
                <li>Ut mattis gravida efficitur.</li>
              </ul>
            </div>
            <div className="Pcard9 OrderContent">
              <h4>Aliquam at dui lorem ipsum</h4>
              <br />
              <ul>
                <li>- Ut mattis gravida efficitur.</li>
                <li>Ut feugiat vehicula nibh, efficitur laoreet justo. </li>
                <li>Molestie id. Integer varius enim sit amet egestas.</li>
                <li>Ut mattis gravida efficitur.</li>
              </ul>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
