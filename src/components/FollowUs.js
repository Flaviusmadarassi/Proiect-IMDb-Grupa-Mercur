import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

export default function FollowUs() {
    return (
        <div className="socialContainer">
            <a
                href="https://www.youtube.com/user/VideoIMDb"
                target="_blank"
                rel="noopener noreferrer"
                className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a
                href="https://www.facebook.com/imdb/"
                target="_blank"
                rel="noopener noreferrer"
                className="facebool social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
                href="https://twitter.com/IMBDHelpDesk"
                target="_blank"
                rel="noopener noreferrer"
                className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
                href="https://www.instagram.com/imdb/?hl=ro"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
        </div>
    );
}