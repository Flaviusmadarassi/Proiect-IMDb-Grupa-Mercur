import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class HeaderAuth extends Component {
  state = {};
  render() {
    return (
      <div>
        <Nav.Link
          href="/login-page"
          className="d-flex align-items-center justify-content-center rounded sign-in-btn"
        >
          <span>sign in</span>
        </Nav.Link>
      </div>
    );
  }
}

export default HeaderAuth;
