import React, { Component } from "react";
import Dropzone from 'react-dropzone-uploader'
import axios from 'axios';

import 'react-dropzone-uploader/dist/styles.css'
import "./Sketch.css";

class Sketch extends Component 
{
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {
      imageURL: null,
    };
  }

  handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta)
  }

  handleSubmit = (files, allFiles) => {
    let imageData = new FormData();
    imageData.append('file', files[0]['file']);

    axios.post('/upload', imageData).then((res) => { 
      console.log("hello", res.data)
      this.setState({
        imageURL: res.data['fileurl'],
      });
    });

    console.log(this.state.imageURL)

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
                maxFiles={1}
                //getUploadParams={this.getUploadParams}
                onChangeStatus={this.handleChangeStatus}
                onSubmit={this.handleSubmit}
                inputContent="Click To Upload Image Files"
                styles={{ dropzone: { minHeight: 200, maxHeight: 250 }, 
                            inputLabel: {color: "#b55c77"},
                            inputLabelWithFiles: { backgroundColor: "#ffffff", color: "#b55c77", 
                                                    border: "1px solid #b55c77"},
                            submitButton: { backgroundColor: "#8a3a52"},
                        }}
            />
        
          </div>
          <div className="Sketch-subContainer u-textCenter">
            <h4 className="Sketch-subTitle">Transformed Artwork</h4>
            {this.state.imageURL == null ? null : <img className="Sketch-image" src={this.state.imageURL}/>}
          </div>
        </div>
      </div>
    );
  }
}

export default Sketch;
