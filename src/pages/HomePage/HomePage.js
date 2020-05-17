import React, { Component } from "react";
import Footer from "../../components/Footer/Footer";
import HomeContent from "./HomeContent";
import Carousel from "./Carousel";
import ContactForm from "../../components/ContactForm/ContactForm";
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
