import React, { Component } from "react";
// import { SocialIcon } from 'react-social-icons';
import "./Footer.css";


class Footer extends Component {
    render() {
        return (
            <div className="FooterContainer">
                <div className ="contactUs" className="infoContainer">
                    <div className="titleTags"><h3>CONTACT US</h3></div>
                    <div className="detailsContainer">
                        <p>contactus@myimdb.com</p>
                        <p>searcyourmovie@myimdb.com</p>
                        <p>www.myimdb.com</p>
                        <p>0262-165-376</p>
                    </div>
                </div>
                <div className ="shortcuts" className="infoContainer">
                    <div className="titleTags"><h3>SHORTCUTS</h3></div>
                    <div className="detailsContainer"></div>
                </div>
                <div className = "followUs" className="infoContainer">
                    <div className="titleTags"><h3>FOLLOW US</h3></div>
                    <div className="detailsContainer">
                    
                    </div>
                </div>
            </div>

        )
    }
};

export default Footer 