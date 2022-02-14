import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link
          style={{
            paddingRight: "1.5rem",
            paddingLeft: "1.5rem",
            color: "#000000",
          }}
          href="#features"
        >
          News
        </Nav.Link>
        <Nav.Link
          style={{
            paddingRight: "1.5rem",
            paddingLeft: "1.5rem",
            color: "#000000",
          }}
          href="#destination"
        >
          Destination
        </Nav.Link>
        <Nav.Link
          style={{
            paddingRight: "1.5rem",
            paddingLeft: "1.5rem",
            color: "#000000",
          }}
          href="#blog"
        >
          Blog
        </Nav.Link>
        <Nav.Link
          style={{
            paddingRight: "1.5rem",
            paddingLeft: "1.5rem",
            color: "#000000",
          }}
          eventKey={2}
          href="#contact"
        >
          Contact
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  );
};

export default Navigation;
