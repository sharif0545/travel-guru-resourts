import React from "react";
import { Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const BackGround = () => {
  return (
    <Col xs={12} md={4} className="my-3">
      <h1 className="coxbazar-heading">Cox's Bazar</h1>
      <p className="coxbazar-text">
        Cox's Bazar is a city, fishing port, tourism centre and district
        headquarters in southeastern Bangladesh. It is famous mostly for its
        long natural sandy beach, and it ...
      </p>
      <Link to="/booking" className="booking">
        <Button variant="warning">Booking -&gt; </Button>
      </Link>
    </Col>
  );
};

export default BackGround;
