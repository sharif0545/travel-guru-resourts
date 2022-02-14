import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { UserContext } from "../../App";
import HotelData from "../HotelData/HotelData";
import Motel from "../Motel/Motel";
import Map from "../Map/Map";
import NavBrand from "../AllNav/NavBrand/NavBrand";
import NavInput from "../AllNav/NavInput/NavInput";
import Navigation from "../AllNav/Navigation/Navigation";
import LogOut from "../LogOut/LogOut";

const Search = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [hotels, setHotels] = useState([]);
  const [booking, setBooking] = useContext(UserContext);
  useEffect(() => {
    setHotels(HotelData);
  }, []);
  console.log(booking);

  return (
    <div>
      <Container>
        <Navbar collapseOnSelect expand="lg">
          <NavBrand></NavBrand>
          <NavInput></NavInput>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navigation></Navigation>
          {loggedInUser.email && <LogOut></LogOut>}
        </Navbar>

        <hr />
        {loggedInUser.email && (
          <span style={{ color: "gray", fontWeight: "bold" }}>
            {" "}
            Welcome{" "}
            <span style={{ color: "tomato" }}> {loggedInUser.name}</span>
          </span>
        )}
        {loggedInUser.email && (
          <div>
            <h6>
              {" "}
              From <span style={{ color: "red" }}>{booking.from}</span> to{" "}
              <span style={{ color: "red" }}>{booking.to}</span>{" "}
            </h6>
            <h4>
              Stay in{" "}
              <span style={{ color: "red" }}>{booking.destination}</span>
            </h4>
          </div>
        )}
        <Row>
          <Col lg={8} md={12}>
            {hotels.map((hotel, id) => (
              <Motel hotel={hotel} key={id}></Motel>
            ))}
          </Col>

          <Col lg={4} md={12}>
            <Map></Map>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Search;
