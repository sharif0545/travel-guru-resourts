import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import BackGround from "../BackGround/BackGround";
import HeaderLight from "../Header/HeaderLight";
import SlideShow from "../SlideShow/SlideShow";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-main">
      <Container>
        <HeaderLight></HeaderLight>
        <div className="destination-section">
          <Row>
            <BackGround></BackGround>

            <Col xs={12} md={8}>
              {/* <SlideShow></SlideShow> */}
              <div className="destination-content">
                <Row>
                  <Col md={4}>
                    <div className="destination-slide">
                      <Link to="/booking">
                        <div className="coxbazar">
                          <h3>COX'SBAZAR</h3>
                        </div>
                      </Link>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="destination-slide">
                      <Link to="/booking">
                        <div className="sreemongol">
                          <h3>SREEMONGOL</h3>
                        </div>
                      </Link>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="destination-slide">
                      <Link to="/booking">
                        <div className="sundarban">
                          <h3>SUNDARBAN</h3>
                        </div>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Home;
