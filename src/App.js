import "./App.css";
import React from "react";
import { Link, Switch } from "react-router-dom";

import { BrowserRouter as Route } from "react-router-dom";

import Home from "./views/Home";
import Create from "./views/Create";

class App extends React.Component {
  render() {
      return (
        <>
            <nav>
              <ul id="navigation">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/create">Create</Link>
                </li>
              </ul>
            </nav>
            <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
          </>
            );
  }
}