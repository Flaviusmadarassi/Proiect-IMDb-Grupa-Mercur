import React, { Component } from "react";
import LogIn from "../../components/LogIn/LogIn.js";
import Carousel from "../../components/carousel";
import "bootstrap/dist/css/bootstrap.min.css";

class Home extends Component {
  render() {
    return (
      <div className="contentHome">
        <LogIn></LogIn>
        <Carousel />;
      </div>
    );
  }
}

export default Home;
