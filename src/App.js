import React, { createContext, useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Search from "./Components/Search/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login/Login";
import Booking from "./Components/Booking/Booking";
import CreateAccount from "./Components/CreateAccount/CreateAccount";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [booking, setBooking] = useState({});
  return (
    <UserContext.Provider
      value={([loggedInUser, setLoggedInUser], [booking, setBooking])}
    >
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/booking">
            <Booking></Booking>
          </PrivateRoute>
          <Route path="/search">
            <Search></Search>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/createaccount">
            <CreateAccount></CreateAccount>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
