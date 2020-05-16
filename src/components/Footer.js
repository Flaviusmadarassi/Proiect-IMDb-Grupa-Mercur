import React, { Component } from "react";
import FollowUs from "./FollowUs";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { SocialIcon } from 'react-social-icons';
import "./Footer.css";


class Footer extends Component {
    render() {
        return (
            <div className="FooterContainer">
                <div className="contactUs infoContainer">
                    <div className="titleTags"><h4>Contact Us</h4></div>
                    <div className="detailsContainer">
                        <p>contactus@myimdb.com</p>
                        <p>searchyourmovie@myimdb.com</p>
                        <p>www.myimdb.com</p>
                        <p>0262-165-376</p>
                    </div>
                </div>
                <div className="shortcuts infoContainer">
                    <div className="titleTags"><h4>Shortcuts</h4></div>
                    <div className="detailsContainer">
                        <Link to={"/"} className="shortcutsLinks"> <p>Home</p></Link>
                        <Link to={"/search-movie"} className="shortcutsLinks"> <p>Search Movie</p></Link>
                        <Link to={"/login-page"} className="shortcutsLinks"> <p>Authentication</p></Link>
                        <Link to={"/edit-movie/add"} className="shortcutsLinks"> <p>Add Movie</p></Link>
                        <Link to={"/edit-movie/delete"} className="shortcutsLinks"> <p>Delete Movie</p></Link>
                        <Link to={"/edit-movie/edit"} className="shortcutsLinks"> <p>Edit Movie</p></Link>

                    </div>
                </div>
                <div className="followUs infoContainer">
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