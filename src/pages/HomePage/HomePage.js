import React, { Component } from "react";

import Footer from "../../components/Footer/Footer";
import HomeContent from "./HomeContent";
import Carousel from "./Carousel";
import "./HomePage.css";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Carousel /> */}
        <HomeContent />
      </React.Fragment>
    );
  }
}

export default Home;
