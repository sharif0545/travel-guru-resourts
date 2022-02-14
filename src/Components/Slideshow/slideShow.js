import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import slide2 from "../images/home/slide_2.png";
import slide3 from "../images/home/slide_3.png";
import slide4 from "../images/home/slide_4.png";
import { Link } from "react-router-dom";
import "./SlideShow.css";
const slideImages = [
  "../images/home/slide_2.png",
  "../images/home/slide_3.png",
  "../images/home/slide_4.png",
];

const SlideShow = () => {
  return (
    <div className="slide-container">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-25" src={slide2} alt="First slide" />
          <Carousel.Caption>
            <Link to="/booking">
              <div className="coxbazar">
                <h3>COX'SBAZAR</h3>
              </div>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-25" src={slide3} alt="Second slide" />

          <Carousel.Caption>
            <Link to="/booking">
              <div className="sreemongol">
                <h3>SREEMONGOL</h3>
              </div>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-25" src={slide4} alt="Third slide" />

          <Carousel.Caption>
            <Link to="/booking">
              <div className="sundarban">
                <h3>SUNDARBAN</h3>
              </div>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SlideShow;
