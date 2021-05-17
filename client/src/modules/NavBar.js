import React, { Component } from "react";
import { Link } from "@reach/router";

import "./NavBar.css";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="NavBar-container">
        <div className="NavBar-linkContainer">
          <Link to="/" className="NavBar-link">
            Home
          </Link>
          <Link to="/sketchtocolor/" className="NavBar-link">
            Sketch...
          </Link>
          <Link to="/phototosketch/" className="NavBar-link">
            Photo...
          </Link>
        </div>
        <div className="NavBar-linkContainer">
          <div className="NavBar-title u-inlineBlock">sketchy</div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
