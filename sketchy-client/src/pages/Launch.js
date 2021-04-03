import React, { Component } from "react";

import "./Launch.css";

import photo from "../modules/images/phphoto.jpg";
import sketch from "../modules/images/phsketch.jpg";

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
        <div className="Launch-showContainer Launch-headContainer">
              <div>
                <div className="Launch-header u-textCenter">sketchy</div>
                <div className="Launch-subheader u-textCenter"> Transforming doodles and sketches to line-art and photos (something better)</div>
              </div>
              <div className="Launch-buttonContainer">
                      <button
                          type="submit"
                          className="Launch-button n u-pointer"
                          value="Submit"
                          onClick={() => {window.location.href = "/sketchy/"}}
                        >
                        start sketching
                      </button>
              </div>
        </div>
        <div className="Launch-bodyContainer Launch-showContainer">
                <span style = {{ color: "#8a3a52" }}> these r placeholder images </span>
                <div>
                  <img className="Launch-im" src={photo} value="photo" width="200px" height="150px"/>
                  <img className="Launch-im" src={sketch} value="sketch" width="200px" height="150px"/>
                </div>
                <div>
                  <img className="Launch-im" src={photo} value="photo" width="200px" height="150px"/>
                  <img className="Launch-im" src={sketch} value="sketch" width="200px" height="150px"/>
                </div>
                <div>
                  <img className="Launch-im" src={photo} value="photo" width="200px" height="150px"/>
                  <img className="Launch-im" src={sketch} value="sketch" width="200px" height="150px"/>
                </div>
        </div>
    </div>
    );
  }
}

export default Launch;
