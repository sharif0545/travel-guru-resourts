import React, { useContext, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Button, Col, Container, Form } from "react-bootstrap";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.Config";
import { UserContext } from "../../App";
import HeaderDark from "../Header/HeaderDark";
import GoogleSignIn from "../GooglesignIn/GoogleSignIn";
import "./Login.css";
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/booking" } };

  const handleBlur = (e) => {
    let isFormValid = true;
    if (e.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordNumber = /\d{1}/.test(e.target.value);
      isFormValid = isPasswordValid && passwordNumber;
    }
    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const { displayName, email, password } = res.user;
          let signedInUser = {
            isSignedIn: true,
            name: displayName,
            email: email,
            password: password,
            error: "",
            success: true,
          };
          // const newUserInfo = { ...user };
          // newUserInfo.error = "";
          // newUserInfo.success = true;
          setUser(signedInUser);
          setLoggedInUser(signedInUser);
          console.log(displayName);
          history.replace(from);
        })
        .catch((error) => {
          let signedInUser = {
            isSignedIn: false,
            name: "",
            email: "",
            password: "",
            error: error.message,
            success: false,
          };
          // const newUserInfo = { ...user };
          // newUserInfo.error = error.message;
          // newUserInfo.success = false;
          setUser(signedInUser);
          setLoggedInUser(signedInUser);
        });
    }
  };

  return (
    <div>
      <Container>
        {" "}
        <HeaderDark></HeaderDark>
        {loggedInUser.email && (
          <h5
            style={{ textAlign: "center", fontWeight: "600", color: "green" }}
          >
            Hello <span style={{ color: "lime" }}>{loggedInUser.name}</span> ,
            Your account created successfully!
          </h5>
        )}
      </Container>

      <div id="create-login">
        <div className="create-login">
          <h3 className="login-heading">Log In </h3>

          <Form onSubmit={handleSubmit}>
            <Form.Group as={Col} md="12" sm="12" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onBlur={handleBlur}
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group as={Col} md="12" sm="12" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onBlur={handleBlur}
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <span className="text-muted" style={{ fontSize: "12px" }}>
              Password should be in 6 characters with at least one numeric
              digit.
            </span>
            <Form.Group
              as={Col}
              md="12"
              sm="12"
              className="mb-3"
              style={{ display: "flex", justifyContent: "space-between" }}
              controlId="formBasicCheckbox"
            >
              <Form.Check type="checkbox" label="Remember me" />
              <span style={{ color: "#f39c12" }}>Forgot your password?</span>
            </Form.Group>

            <div className="d-grid">
              <Button variant="warning" type="submit">
                Log In
              </Button>
            </div>
          </Form>

          <div style={{ textAlign: "center" }}>
            Don't have an account?{" "}
            <span style={{ color: "#f39c12" }}>
              <Link to="/createaccount">Create an account</Link>
            </span>
          </div>

          <p style={{ color: "red" }}> {user.error} </p>
          {user.success && (
            <p style={{ color: "green" }}> User Created Successfully</p>
          )}
        </div>

        <div className="social-login">
          <GoogleSignIn></GoogleSignIn>
        </div>
      </div>
    </div>
  );
};

export default Login;
