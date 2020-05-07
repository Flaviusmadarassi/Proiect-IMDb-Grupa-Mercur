import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Submenu extends React.Component {
    render() {
        return (
            <ul className="nav__submenu">
                <li className="nav__submenu-item ">
                    <a>Add</a>
                </li>
                <li className="nav__submenu-item ">
                    <a>Edit</a>
                </li>
                <li className="nav__submenu-item ">
                    <a>Delete</a>
                </li>
            </ul>
        )
    }
}
export default Submenu;