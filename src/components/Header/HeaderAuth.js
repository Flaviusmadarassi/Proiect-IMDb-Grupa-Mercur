import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import HeaderSearch from "./HeaderSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
class HeaderAuth extends Component {
  state = {};
  render() {
    return (
      <div className="ml-auto">
        <FontAwesomeIcon icon={faCoffee} />
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
