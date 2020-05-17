import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import './Header.css';
import { NavLink } from 'react-router-dom';
import LogOutButton from "./LogIn/LogOut.js";



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

  componentDidUpdate() {
    const { editMovie } = this.state
    let actualHeader = this.changeHeader();
    if (editMovie != actualHeader) {
      this.setState({ editMovie: actualHeader },
        () => {
          console.log(editMovie)
        })
    }
  }




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
          <img className="logo-nav" src={require("./poza.JPG")} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

            <NavLink exact className='nav-link' to='/' activeClassName="selected" style={{ marginLeft: 20, fontSize: 20 }}>Home </NavLink>
            <NavLink exact className='nav-link' to='/search-movie' activeClassName="selected" style={{ marginLeft: 20, fontSize: 20 }}>Search Movie</NavLink>
            <NavLink exact className='nav-link' to='/login-page' activeClassName="selected" style={{ marginLeft: 20, fontSize: 20 }}>Authentication</NavLink>

            {this.state.isLoggedIn ? (

              <React.Fragment >

                <NavDropdown className='nav-link' activeClassName="selected" style={{ marginLeft: 20, fontSize: 20 }} title={this.state.editMovie} id="nav-dropdown" className="nav-dropdown-menu" >
                  <NavLink exact to="/editation/add" >Add Movie </NavLink>
                  <NavLink exact to="/editation/delete"> Delete Movie</NavLink>
                  <NavLink exact to="/editation/edit"> Edit Movie  </NavLink>
                </NavDropdown>
                <LogOutButton />

              </React.Fragment>

            ) : null}
            {/* <Nav.Link href="/movie-details" className="detailsButton">
              Movie Details
            </Nav.Link> */}
          </Nav>
          {this.props.children}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
