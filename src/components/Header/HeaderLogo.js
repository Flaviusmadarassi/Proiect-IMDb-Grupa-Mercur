import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";

class HeaderLogo extends Component {
  render() {
    return (
      <Navbar.Brand className="d-flex align-items-center justify-content-center h-100">
        <h3>My IMDb</h3>
      </Navbar.Brand>
    );
  }
}

export default HeaderLogo;
