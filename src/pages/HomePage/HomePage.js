import React, { Component } from "react";
import Footer from "../../components/Footer";
import HomeContent from "./HomeContent";
import Carousel from "./Carousel.jsx";
import ContactForm from "../../components/ContactForm";
import "./HomePage.css";
// import "bootstrap/dist/css/bootstrap.min.css";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Carousel />
        <HomeContent />
        <ContactForm />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
