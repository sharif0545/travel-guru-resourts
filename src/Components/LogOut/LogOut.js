import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { UserContext } from "../../App";
import "./LogOut.css";
const LogOut = () => {
  const history = useHistory();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const handleLogOut = () => {
    setLoggedInUser({});
    history.replace("/home");
  };
  return (
    <Button className="logout btn-warning" onClick={handleLogOut}>
      Logout
    </Button>
  );
};

export default LogOut;
