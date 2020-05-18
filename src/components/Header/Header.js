import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import LogOutButton from "../LogIn/LogOut.js";
import HeaderAuth from "./HeaderAuth";
import "./Header.css";
// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";

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
      <Navbar bg="dark" variant="dark" expand="lg" className="nav">
        <Navbar.Brand>
          <img className="logo-nav" src={require("../poza.JPG")} />
        </Navbar.Brand>
        {/* <HeaderLogo /> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              href="/"
              activeClassName="active"
              className="nav-link"
              style={{ marginLeft: 20, fontSize: 20 }}
            >
              Home
            </Nav.Link>

            <Nav.Link
              href="/search-movie"
              activeClassName="active"
              style={{ marginLeft: 20, fontSize: 20 }}
            >
              Search Movie
            </Nav.Link>

            {this.state.isLoggedIn ? (
              <React.Fragment>
                <NavDropdown
                  style={{ marginLeft: 20, fontSize: 20 }}
                  title={this.changeHeader()}
                  id="nav-dropdown"
                  className="nav-dropdown-menu"
                >
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
              </React.Fragment>
            ) : null}

            <Nav.Link
              href="/login-page"
              style={{ marginLeft: 20, fontSize: 20 }}
            >
              <> {this.state.isLoggedIn ? <LogOutButton /> : <HeaderAuth />}</>
            </Nav.Link>

            {/* <Nav.Link href="/movie-details" className="detailsButton">
              Movie Details
            </Nav.Link> */}
          </Nav>
          {this.props.children}
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
