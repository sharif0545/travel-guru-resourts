import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import slide2 from "../images/home/slide_2.png";
import slide3 from "../images/home/slide_3.png";
import slide4 from "../images/home/slide_4.png";
const slideImages = [
  "../images/home/slide_2.png",
  "../images/home/slide_3.png",
  "../images/home/slide_4.png",
];

const slideShow = () => {
  return (
    <div className="slide-container">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-25" src={slide2} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-25" src={slide3} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-25" src={slide4} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default slideShow;
