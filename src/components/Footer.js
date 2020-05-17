import React, { Component } from "react";
import FollowUs from "./FollowUs";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { SocialIcon } from 'react-social-icons';
import "./Footer.css";


class Footer extends Component {
    state = {
        isLoggedIn: false
        
      };

      componentDidMount() {
        let token = document.cookie;
        if (token.includes("token")) {
          this.setState({ isLoggedIn: true });
          console.log("token",token);
        }
      }

    render() {
        return (
            <div className="FooterContainer row">
                <div className="contactUs infoContainer col-sm">
                    <div className="titleTags"><h4>Contact Us</h4></div>
                    <div className="detailsContainer">
                        <p>contactus@myimdb.com</p>
                        <p>searchyourmovie@myimdb.com</p>
                        <p>www.myimdb.com</p>
                        <p>0262-165-376</p>
                    </div>
                </div>
                <div className="shortcuts infoContainer col-sm">
                    <div className="titleTags"><h4>Shortcuts</h4></div>
                    <div className="detailsContainer">
                        <Link to={"/"} className="shortcutsLinks"> <p>Home</p></Link>
                        <Link to={"/search-movie"} className="shortcutsLinks"> <p>Search Movie</p></Link>
                        <Link to={"/login-page"} className="shortcutsLinks"> <p>Authentication</p></Link>
                        {this.state.isLoggedIn ? (
                        <React.Fragment>
                        <Link to={"/editation/add"} className="shortcutsLinks"> <p>Add Movie</p></Link>
                        <Link to={"/editation/delete"} className="shortcutsLinks"> <p>Delete Movie</p></Link>
                        <Link to={"/editation/edit"} className="shortcutsLinks"> <p>Edit Movie</p></Link>
                        </React.Fragment>
                        ) : null}
                        

                    </div>
                </div>
                <div className="followUs infoContainer col-sm">
                    <div className="titleTags"><h4>Follow Us</h4></div>
                    <div className="detailsContainer">
                        <div><FollowUs /></div>
                    </div>
                </div>
            </div>

        )
    }
};

export default Footer 