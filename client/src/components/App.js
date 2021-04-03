import React, { Component } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Launch from "./pages/Launch.js";
import Sketch from "./pages/Sketch.js";
import NavBar from "./modules/NavBar.js";

import "../utilities.css";

class App extends Component {
  
  constructor(props) 
  {
    super(props);
  }

  render() 
  {
    return (
      <>
      <NavBar />
      <div className="App-container">
        <Router>
          <Launch path="/" />
          <Sketch path="/sketchy/" />
          <NotFound default />
        </Router>
      </div>
      </>
    );
  }
}

export default App;
