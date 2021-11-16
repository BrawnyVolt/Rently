import React from "react";
import { Route, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Properties from "./Properties";

const linkStyles = {
  padding: "10px 20px 10px 20px",
  margin: "10px 10px 10px 10px",
  background: "#f1d302",
  textDecoration: "none",
  color: "white",
  justifyContent: "center",
  textAlign: "center",
  borderRadius: "8px",
};

function App() {
  return (
    <>
      <div className="nav-bar">
        <NavLink
          to="/"
          exact
          style={linkStyles}
          className="nav-bar-route"
          activeStyle={{
            background: "#235789",
          }}
        >
          Home
        </NavLink>

        <NavLink
          to="/Login"
          exact
          style={linkStyles}
          className="nav-bar-route"
          activeStyle={{
            background: "#235789",
          }}
        >
          Login
        </NavLink>

        <NavLink
          to="/Properties"
          exact
          style={linkStyles}
          className="nav-bar-route"
          activeStyle={{
            background: "#235789",
          }}
        >
          Properties
        </NavLink>
      </div>

      <div>
        <Switch>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/Properties">
            <Properties />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
