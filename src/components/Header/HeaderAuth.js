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
          href="#"
          className="d-flex align-items-center justify-content-center rounded sign-in-btn"
        >
          <i class="icon"></i>
          <span>sign in</span>
        </Nav.Link>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </div>
    );
  }
}

export default HeaderAuth;
