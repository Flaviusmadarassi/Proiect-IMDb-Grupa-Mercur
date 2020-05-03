import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Submenu from "./SubmenuEditPage"

class Edit extends Component {
    state = {
        showEditMenu: false
    }
    handleHover = () => {
        this.setState({ showEditMenu: true });
    };

    handleLeave = () => {
        this.setState({ showEditMenu: false });
    };
    render() {
        return (
            <div className="contentEdit">
                {this.state.showEditMenu && <Submenu />}
            </div>
        );
    }
}

export default Edit;