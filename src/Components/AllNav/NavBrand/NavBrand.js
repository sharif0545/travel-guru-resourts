import React from "react";
import { Link } from "react-router-dom";
import logo_dark from "../../images/logo/Logo-dark.png";
import "./NavBrand.css";
const NavBrand = () => {
  return (
    <Link to="/home">
      {" "}
      <img className="logo-dark" src={logo_dark} alt="logo" />{" "}
    </Link>
  );
};

export default NavBrand;
