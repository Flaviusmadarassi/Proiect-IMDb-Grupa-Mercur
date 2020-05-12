import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import logOutFunctionality from "./LogIn/LogOut.js";

class Navigation extends Component {
  state = {
    isLoggedIn: false,
    editMovie: "Editation",
  };

  changeHeader = () => {
    let currentUrl = window.location.href;
    let currentPage = currentUrl.split("/").slice(-1);
    if (currentPage == "edit") {
      return "Edit Movie";
    }
    if (currentPage == "add") {
      return "Add Movie";
    }
    if (currentPage == "delete") {
      return "Delete Movie";
    } else {
      return "Editation";
    }
  };

  componentDidMount() {
    let token = document.cookie;
    if (token.includes("token")) {
      this.setState({ isLoggedIn: true });
    }
  }

  render() {
    return (
      <Navbar bg="light" expand="lg" className="nav">
        <Navbar.Brand>
          <h3 className="logoName">My IMDb</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" activeStyle={{ color: "red" }}>
              Home
            </Nav.Link>

            <Nav.Link href="/search-movie">Search Movie</Nav.Link>

            <Nav.Link href="/login-page">Authentication</Nav.Link>

            {this.state.isLoggedIn ? (
              <React.Fragment>
                <NavDropdown title={this.changeHeader()} id="nav-dropdown">
                  <NavDropdown.Item href="/editation/add">
                    Add Movie
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/editation/delete">
                    Delete Movie
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/editation/edit">
                    Edit Movie
                  </NavDropdown.Item>
                </NavDropdown>
                <Button onClick={logOutFunctionality} variant="dark">
                  LOG-OUT
                </Button>
              </React.Fragment>
            ) : null}

            <Nav.Link href="/movie-details" className="detailsButton">
              Movie Details
            </Nav.Link>
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
