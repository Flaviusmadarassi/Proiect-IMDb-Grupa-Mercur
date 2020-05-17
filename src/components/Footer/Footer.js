import React, { Component } from "react";
import FollowUs from "./FollowUs";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { SocialIcon } from 'react-social-icons';
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="FooterContainer">
        <div className="contactUs" className="infoContainer">
          <div className="titleTags">
            <h3>Contact Us</h3>
          </div>
          <div className="detailsContainer">
            <p>contactus@myimdb.com</p>
            <p>searchyourmovie@myimdb.com</p>
            <p>www.myimdb.com</p>
            <p>0262-165-376</p>
          </div>
        </div>
        <div className="shortcuts" className="infoContainer">
          <div className="titleTags">
            <h3>Shortcuts</h3>
          </div>
          <div className="detailsContainer">
            <Link to={"/"} className="links">
              <p>Home</p>
            </Link>
            <Link to={"/search-movie"} className="links">
              <p>Search Movie</p>
            </Link>
            <Link to={"/login-page"} className="links">
              <p>Authentication</p>
            </Link>
            <Link to={"/edit-movie/add"} className="links">
              <p>Add Movie</p>
            </Link>
            <Link to={"/edit-movie/add"} className="links">
              <p>Add Movie</p>
            </Link>
            <Link to={"/edit-movie/edit"} className="links">
              <p>Edit Movie</p>
            </Link>
          </div>
        </div>
        <div className="followUs" className="infoContainer">
          <div className="titleTags">
            <h3>Follow Us</h3>
          </div>
          <div className="detailsContainer">
            <div>
              <FollowUs />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
