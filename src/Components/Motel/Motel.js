import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import star from "../images/Icon/star_1_.png";
import "./Motel.css";
const Motel = (props) => {
  const {
    category,
    outlook,
    facilities,
    cost,
    rooms,
    flexibility,
    review,
    image,
  } = props.hotel;

  return (
    <div>
      <Row>
        <Col md={6}>
          <img className="search-img" src={image} alt="image" />
        </Col>
        <Col md={6}>
          <Card className="hotel-des">
            <Card.Body className="mt-2">
              <Card.Title>{category}</Card.Title>
              <Card.Text className="text-muted">{outlook}</Card.Text>
              <Card.Text className="text-muted">{facilities}</Card.Text>
              <Card.Text className="text-muted">{flexibility}</Card.Text>
              <Card.Text className="text-muted">{rooms}</Card.Text>
              <Row>
                <Col md={6} sm={6}>
                  {" "}
                  <Card.Text href="#">
                    <img className="star-img" src={star} alt="star" /> {review}
                  </Card.Text>
                </Col>
                <Col md={6} sm={6}>
                  {" "}
                  <Card.Text href="#">{cost}</Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Motel;
