import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { UserContext } from "../../App";
import logo_white from "../images/logo/logo-white.png";
import LogOut from "../LogOut/LogOut";
import "./HeaderLight.css";

const HeaderLight = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div className="navigation">
      <Navbar collapseOnSelect expand="lg">
        <Link to="/home">
          <img style={{ width: "100%" }} src={logo_white} alt="logo" />
        </Link>
        <Form inline>
          <FormControl
            style={{ width: "400px" }}
            type="text"
            placeholder="Search your destination"
            className="mr-sm-2"
          />
        </Form>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              style={{
                paddingRight: "1.5rem",
                paddingLeft: "1.5rem",
                color: "#ffffff",
              }}
              href="#features"
            >
              News
            </Nav.Link>
            <Nav.Link
              style={{
                paddingRight: "1.5rem",
                paddingLeft: "1.5rem",
                color: "#ffffff",
              }}
              href="#destination"
            >
              Destination
            </Nav.Link>
            <Nav.Link
              style={{
                paddingRight: "1.5rem",
                paddingLeft: "1.5rem",
                color: "#ffffff",
              }}
              href="#blog"
            >
              Blog
            </Nav.Link>
            <Nav.Link
              style={{
                paddingRight: "1.5rem",
                paddingLeft: "1.5rem",
                color: "#ffffff",
              }}
              eventKey={2}
              href="#contact"
            >
              Contact
            </Nav.Link>

            {loggedInUser.email ? (
              <LogOut></LogOut>
            ) : (
              <Link className="btn btn-warning" to="/login">
                Log in
              </Link>
            )}
          </Nav>{" "}
          {loggedInUser.email && (
            <span
              style={{
                color: "tomato",
                fontWeight: "bold",
                marginLeft: "1rem",
              }}
            >
              {" "}
              {loggedInUser.name}
            </span>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default HeaderLight;
