import React, { Component } from "react";
import Carousel from "../../components/carousel";
import Footer from "../../components/Footer";
import "./HomePage.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Home extends Component {
  render() {
    return (
      <div className="contentHome">
        <div className="carousel"> 
          <Carousel />
          </div>
          <div className="Footer">
            <Footer />
          </div>
      </div>
    );
  }
}

export default Home;
