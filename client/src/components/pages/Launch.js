import React, { Component } from "react";

import "../../utilities.css";
import "./Launch.css";

class Launch extends Component 
{
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
      <div className="Launch-container">
        <div>
          <h1 className="Launch-header u-textCenter">sketchy</h1>
        </div>
        <button
            type="submit"
            className="Launch-button n u-pointer"
            value="Submit"
            onClick={() => {window.location.href = "/sketchy/"}}
          >
          start sketching
        </button>
    </div>
    );
  }
}

export default Launch;
