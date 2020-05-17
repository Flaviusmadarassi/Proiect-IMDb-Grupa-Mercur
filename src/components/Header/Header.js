import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import HeaderLogo from "./HeaderLogo";
import HeaderAuth from "./HeaderAuth";
import "./Header.css";
// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
// import Button from "react-bootstrap/Button";

class Header extends Component {
  state = {
    isLoggedIn: false,
  };

  componentDidMount() {
    let token = document.cookie;
    if (token.includes("token")) {
      this.setState({ isLoggedIn: true });
    }
  }

  componentDidUpdate() {}

  render() {
    return (
      <div className="container">
        <Navbar expand="lg" className="nav p-0 header-content shadow-sm">
          <HeaderLogo />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto align-items-center">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/search-movie">Search Movie</Nav.Link>

              <Nav.Link href="/login-page">Authentication</Nav.Link>
              {this.state.isLoggedIn ? (
                <NavDropdown title="Edit Movie" id="nav-dropdown">
                  <NavDropdown.Item href="/edit-movie/add">
                    Add Movie
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/edit-movie/delete">
                    Delete Movie
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/edit-movie/edit">
                    Edit Movie
                  </NavDropdown.Item>
                </NavDropdown>
              ) : null}

              <Nav.Link href="/movie-details" className="detailsButton">
                Movie Details
              </Nav.Link>
              <HeaderAuth />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
