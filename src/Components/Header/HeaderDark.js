import React from "react";
import { Navbar } from "react-bootstrap";
import NavBrand from "../AllNav/NavBrand/NavBrand";
import Navigation from "../AllNav/Navigation/Navigation";
import NavInput from "../AllNav/NavInput/NavInput";
const HeaderDark = () => {
  return (
    <div className="navigation">
      <Navbar collapseOnSelect expand="lg">
        <NavBrand></NavBrand>
        <NavInput></NavInput>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navigation></Navigation>
      </Navbar>
    </div>
  );
};

export default HeaderDark;
