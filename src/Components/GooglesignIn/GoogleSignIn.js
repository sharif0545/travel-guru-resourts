import React, { useContext, useState } from "react";
import google from "../images/Icon/google.png";
import firebase from "firebase";
import { UserContext } from "../../App";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./GoogleSignIn.css";
const GoogleSignIn = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/booking" } };
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          success: true,
        };
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="social-login">
      <span className="or">Or</span>
      <p onClick={handleGoogleSignIn}>
        <span>
          {" "}
          <img src={google} alt="google" />{" "}
        </span>{" "}
        <span className="social-text-google">
          {" "}
          <Link to="/booking">Continue with google</Link>
        </span>
      </p>
    </div>
  );
};

export default GoogleSignIn;
