import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    annotations: []
  };
  annoInit = () => {
    window.anno.makeAnnotatable(this.myImage);
  };
  annoHandler = (handler, fn) => {
    window.anno.addHandler(handler, fn);
  };
  createAnnotation = annotation => {
    this.setState({
      annotations: [...this.state.annotations, annotation]
    });
  };
  componentDidMount() {
    this.annoInit();
    this.annoHandler("onAnnotationCreated", this.createAnnotation);
  }
  componentWillUnmount() {
    window.anno.destroy();
  }
  render() {
    return (
      <div className="App">
        <div className="App-image__container">
          <img
            ref={r => (this.myImage = r)}
            className="App-image"
            src="./pexels-photo-133394.jpeg"
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default App;
