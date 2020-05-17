import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

class HeaderNav extends Component {
  state = {};
  render() {
    return (
      <div>
        <Nav className="mr-auto">
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
        </Nav>
      </div>
    );
  }
}

export default HeaderNav;
