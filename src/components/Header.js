import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown"

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "../App.css"

class Navigation extends Component {
  state = {};
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand >My IMDb</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" activeStyle={{color:"red"}}>Home</Nav.Link>
            <Nav.Link href="/search-movie">Search Movie</Nav.Link>

            <Nav.Link href="/login-page">Authentication</Nav.Link>



            <NavDropdown title="Edit Movie" id="nav-dropdown">
              <NavDropdown.Item href="/edit-movie/add">Add Movie</NavDropdown.Item>
              <NavDropdown.Item href="/edit-movie/delete">Delete Movie</NavDropdown.Item>
              <NavDropdown.Item href="/edit-movie/edit">Edit Movie</NavDropdown.Item>
            </NavDropdown>


            <Nav.Link href="/movie-details" className="detailsButton">Movie Details</Nav.Link>
          </Nav>

          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
