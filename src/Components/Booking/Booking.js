import React, { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import calender_icon from "../images/Icon/calender_icon.png";
import { useHistory } from "react-router-dom";
import BackGround from "../BackGround/BackGround";
import HeaderLight from "../Header/HeaderLight";
import "./Booking.css";
import { UserContext } from "../../App";

const Booking = (props) => {
  const history = useHistory();
  const handleBooking = () => {
    history.push("/search");
    // console.log(props);
  };
  let [booking, setBooking] = useContext(UserContext);

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "origin") {
      isFieldValid = e.target.value;
    }
    if (e.target.name === "destination") {
      isFieldValid = e.target.value;
    }

    if (e.target.name === "from") {
      isFieldValid = e.target.value;
    }
    if (e.target.name === "to") {
      isFieldValid = e.target.value;
    }
    if (isFieldValid) {
      const newBookingInfo = { ...booking };
      newBookingInfo[e.target.name] = e.target.value;
      setBooking(newBookingInfo);
    }
    e.preventDefault();
  };
  // console.log(booking);

  return (
    <div className="home-main">
      <Container>
        <HeaderLight></HeaderLight>
        <div className="booking-section">
          <Row>
            <BackGround></BackGround>
            <Col xs={12} md={6}>
              <div className="booking-content">
                <form onSubmit={handleBooking}>
                  <div className="form-single">
                    <span className="text-muted">
                      {" "}
                      <label htmlFor="origin">origin</label>{" "}
                    </span>
                    <br />
                    <input
                      type="text"
                      name="origin"
                      id="origin"
                      placeholder="Dhaka"
                      defaultValue="Dhaka"
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="form-single">
                    <span className="text-muted">
                      {" "}
                      <label htmlFor="destination">Destination</label>{" "}
                    </span>
                    <br />
                    <input
                      type="text"
                      name="destination"
                      id="destination"
                      placeholder="Cox'sbazar"
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="date-picker form-single">
                    <div className="date-from">
                      <span className="from text-muted">From </span>
                      <div className="date-from-style">
                        <input
                          className="text-muted"
                          type="date"
                          name="from"
                          id="from"
                          onBlur={handleBlur}
                        />
                        <label htmlFor="from">
                          {" "}
                          <img src={calender_icon} alt="calender" />{" "}
                        </label>
                      </div>
                    </div>
                    <div className="date-to">
                      <span className="to text-muted">To </span>
                      <div className="date-to-style">
                        <input
                          className="text-muted"
                          type="date"
                          name="to"
                          id="to"
                          onBlur={handleBlur}
                        />
                        <label htmlFor="to">
                          {" "}
                          <img src={calender_icon} alt="calender" />{" "}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-single">
                    <Button variant="warning" block type="submit">
                      Start booking
                    </Button>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Booking;
