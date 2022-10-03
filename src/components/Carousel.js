import React from "react";
import backround1 from "../assets/statics/slide1-background.png";
import backround2 from "../assets/statics/slide2-background.png";
import backround3 from "../assets/statics/slide3-background.png";

import "../assets/css/carousel.css";
export default function Carousel() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={backround1} className="d-block w-100 h-100" alt="..." />
          <div className="carousel-caption d-none d-md-block  ">
            <h1>Sed ut perspiciatis unde omnis iste natus</h1>
            <br />
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque.
            </p>
            <br />
            <button>Read more</button>
          </div>
        </div>
        <div className="carousel-item">
          <img src={backround2} className="d-block w-100 h-100" alt="..." />
          <div className="carousel-caption d-none d-md-block  ">
            <h1>Sed ut perspiciatis unde omnis iste natus</h1>
            <br />
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque.
            </p>
            <br />
            <button>Read more</button>
          </div>
        </div>
        <div className="carousel-item">
          <img src={backround3} className="d-block w-100 h-100" alt="..." />
          <div className="carousel-caption d-none d-md-block  ">
            <h1>Sed ut perspiciatis unde omnis iste natus</h1>
            <br />
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque.
            </p>
            <br />
            <button>Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
}
