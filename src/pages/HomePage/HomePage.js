import React, { Component } from "react";
import Carousel from "../../components/carousel";
import "bootstrap/dist/css/bootstrap.min.css";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>;
        <Carousel />;
      </div>
    );
  }
}

export default Home;
