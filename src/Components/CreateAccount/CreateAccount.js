import React, { useContext, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Button, Col, Container, InputGroup, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import firebase from "firebase";
import "./CreateAccount.css";
import { UserContext } from "../../App";
import HeaderDark from "../Header/HeaderDark";
import GoogleSignIn from "../GooglesignIn/GoogleSignIn";

const CreateAccount = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [newUser, setnewUser] = useState(false);
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

  const handleBlur = (e) => {
    let isFormValid = true;
    if (e.target.name === "name") {
      isFormValid = e.target.value;
    }
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
    if (user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          updateUserName(user.name);
          setLoggedInUser(newUserInfo);
          //   console.log(res);
          //      console.log(res.user.displayName);
          history.replace(from);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
        });
    }
    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.success = true;
          newUserInfo.error = "";
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);

          console.log(user);
          history.push("/login");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          const newUserInfo = { ...user };
          newUserInfo.error = errorCode;
          newUserInfo.success = false;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          console.log(errorCode, "-", errorMessage);
        });
    }
    e.preventDefault();
  };
  const updateUserName = (name) => {
    const updatedUser = firebase.auth().currentUser;
    updatedUser
      .updateProfile({
        displayName: name,
      })
      .then(() => {
        console.log("User name updated successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <Container>
        {" "}
        <HeaderDark></HeaderDark>
      </Container>

      <div id="create-account">
        <div className="account-main">
          <h3 className="account-heading">Create an account</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group
                as={Col}
                md="12"
                sm="12"
                controlId="validationCustom01"
              >
                <Form.Label>Your name</Form.Label>
                <Form.Control
                  name="name"
                  required
                  type="text"
                  placeholder="Your name"
                  onBlur={handleBlur}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                lg="12"
                md="12"
                sm="12"
                controlId="validationCustomUsername"
              >
                <Form.Label>Username or email</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    onBlur={handleBlur}
                    name="email"
                    type="text"
                    placeholder="Your user name or email"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                </InputGroup>
              </Form.Group>
            </Form.Row>
            <Form>
              <Row>
                <Form.Group as={Col} md="6" controlId="validationCustom05">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    onBlur={handleBlur}
                    name="password"
                    type="password"
                    placeholder="psaaword"
                    required
                  />
                  <span className="text-muted" style={{ fontSize: "12px" }}>
                    Password should be in 6 characters with at least one numeric
                    digit.
                  </span>
                  {/* <Form.Control.Feedback type="invalid">
                  Please give password.
                </Form.Control.Feedback> */}
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationCustom05">
                  <Form.Label>Confirm password</Form.Label>
                  <Form.Control
                    onBlur={handleBlur}
                    name="confirmPassword"
                    type="password"
                    placeholder="psaaword"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please confirm given password.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                  <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                  />
                </Form.Group>
                <div className="d-grid">
                  <Button variant="warning" type="submit">
                    Create account
                  </Button>
                </div>
                <div className="already">
                  Already have an account?{" "}
                  <span>
                    <Link to="/login">Log In</Link>
                  </span>
                </div>
              </Row>
            </Form>
          </Form>
        </div>
        <GoogleSignIn></GoogleSignIn>
      </div>
    </>
  );
};

export default CreateAccount;
