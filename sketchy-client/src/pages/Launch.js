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
                <div className="Launch-subheader u-textCenter"> transforming  <b className="Launch-bold"> doodles </b>  and  <b className="Launch-bold"> sketches </b> into  <b className="Launch-bold">colorized</b>  photos and back again </div>
              </div>
              <span className="Launch-buttonContainer">
                      <button
                          type="submit"
                          className="Launch-button n u-pointer"
                          value="Submit"
                          onClick={() => {window.location.href = "/sketchtocolor/"}}
                        >
                        sketch to photo
                      </button>
                      <button
                          type="submit"
                          className="Launch-button n u-pointer"
                          value="Submit"
                          onClick={() => {window.location.href = "/phototosketch/"}}
                        >
                        photo to sketch
                      </button>
              </span>
        </div>
    </div>
    );
  }
}

export default Launch;
