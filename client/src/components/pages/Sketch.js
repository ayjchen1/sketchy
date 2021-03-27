import React, { Component } from "react";
import Dropzone from 'react-dropzone-uploader'

import 'react-dropzone-uploader/dist/styles.css'
import "../../utilities.css";
import "./Sketch.css";

class Sketch extends Component 
{
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  getUploadParams = () => {
    return { url: 'https://httpbin.org/post' }
  }

  handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta)
  }

  handleSubmit = (files, allFiles) => {
    console.log(files)
    console.log("******")
    console.log(allFiles)
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }

  render() {
    return (
        <div className="Sketch-container">
        <h1 className="Sketch-header u-textCenter">Sketchy generator . . .</h1>
        <hr className="Sketch-line" />
        <div className="u-flex">
          <div className="Sketch-subContainer u-textCenter">
            <h4 className="Sketch-subTitle">Original Artwork</h4>
            <Dropzone
                accept="image/*"
                getUploadParams={this.getUploadParams}
                onChangeStatus={this.handleChangeStatus}
                onSubmit={this.handleSubmit}
                styles={{ dropzone: { minHeight: 200, maxHeight: 250 }, 
                            inputLabel: {color: "#b55c77"},
                            inputLabelWithFiles: { backgroundColor: "#ffffff", color: "#b55c77", 
                                                    border: "1px solid #b55c77"},
                            submitButton: { backgroundColor: "#8a3a52"} }}
            />
          </div>
          <div className="Sketch-subContainer u-textCenter">
            <h4 className="Sketch-subTitle">Transformed Artwork</h4>
            <div>meow</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sketch;
