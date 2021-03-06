import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import MovieTab from "./MovieTab";

class HomeContent extends Component {
  state = {};
  render() {
    return (
      <div className="home-content text-light">
        <div className="home-content-head mb-5 shadow">
          <div className="container">
            <div className="row">
              <div className="col-12 mt-4 mb-2">
                <h2>New items</h2>
              </div>
              <Nav className="justify-content-start">
                <Nav.Item>
                  <Nav.Link href="#">New Releases</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#">Movies</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#">TV Shows</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </div>
        </div>
        <MovieTab />
        <div className="container"></div>
      </div>
    );
  }
}

export default HomeContent;
