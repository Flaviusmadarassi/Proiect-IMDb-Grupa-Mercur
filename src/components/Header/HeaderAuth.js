import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import HeaderSearch from "./HeaderSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
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
        <div>
          <FontAwesomeIcon icon={faSearch} size="2x" />
          </div>
      </div>
    );
  }
}

export default HeaderAuth;
