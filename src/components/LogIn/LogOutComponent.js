import React, { Component } from "react";
import "./LogIn.css";

class LogOutMessage extends Component {
  state = {};
  render() {
    return (
      <div className="log-out-message">
        <h2>You are already signed in!</h2>
      </div>
    );
  }
}

export default LogOutMessage;
