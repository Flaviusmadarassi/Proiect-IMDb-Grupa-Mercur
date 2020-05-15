import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import HeaderSearch from "./HeaderSearch";
class HeaderAuth extends Component {
  state = {};
  render() {
    return (
      <div className="ml-auto">
        <HeaderSearch></HeaderSearch>
        <Nav.Link
          href="#"
          className="d-flex align-items-center justify-content-center rounded sign-in-btn"
        >
          <i class="icon"></i>
          <span>sign in</span>
        </Nav.Link>
      </div>
    );
  }
}

export default HeaderAuth;
