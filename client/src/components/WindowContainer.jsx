import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Authors from "./Authors";

export default class WindowContainer extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />

        <Route exact path="/home" component={Home} />
        <Route exact path="/authors" component={Authors} />
      </div>
    );
  }
}
