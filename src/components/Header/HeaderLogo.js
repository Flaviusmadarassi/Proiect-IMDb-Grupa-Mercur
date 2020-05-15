import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";

class HeaderLogo extends Component {
  render() {
    return (
      <Navbar.Brand className="logo-name">
        <h3 className="d-flex align-items-center justify-content-center">
          My IMDb
        </h3>
      </Navbar.Brand>
    );
  }
}

export default HeaderLogo;
