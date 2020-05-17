import React, { Component } from "react";
import "./LogIn.css";
import Footer from "../Footer";

class LogIn extends Component {
  state = {
    signUpUsername: "",
    signUpPassword: "",
    logInUsername: "",
    logInPassword: "",
    signUpMessage: "",
    logInMessage: "",
    formState: "signIn",
    authtenticationState: false,
  };

  componentDidMount() {
    if (document.cookie.startsWith("token=")) {
      this.setState({ authtenticationState: true });
    }
  }

  onSubmitSignUp = (data) => {
    this.setState({
      signUpUsername: "",
      signUpPassword: "",
      signUpMessage: data.message,
    });
  };

  onSubmitLogIn = (data) => {
    this.setState({
      logInUsername: "",
      logInPassword: "",
      logInMessage: data.message,
    });
  };

  handleChangeFormState = (formState) => {
    this.setState({
      formState,
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  redirectOnAuthtentication = (resp) => {
    document.cookie = `token=${resp.accessToken}`;
    this.props.history.push("/");
    window.location.reload();
  };

  handleSubmitSignUp = (event) => {
    fetch("https://movies-app-siit.herokuapp.com/auth/register", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      body: JSON.stringify({
        username: this.state.signUpUsername,
        password: this.state.signUpPassword,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        json.authenticated === true
          ? this.redirectOnAuthtentication(json)
          : this.onSubmitSignUp(json);
      });
    event.preventDefault();
  };

  handleSubmitLogIn = (event) => {
    fetch("https://movies-app-siit.herokuapp.com/auth/login", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      body: JSON.stringify({
        username: this.state.logInUsername,
        password: this.state.logInPassword,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        json.authenticated === true
          ? this.redirectOnAuthtentication(json)
          : this.onSubmitLogIn(json);
      });
    event.preventDefault();
  };

  render() {
    return (
      <div className="authFormBody">
        <div
          className={
            "authFormContainer" +
            (this.state.formState === "signUp" ? " right-panel-active" : "")
          }
          id="container"
        >
          <div className="form-container sign-up-container">
            <form className="register-form" onSubmit={this.handleSubmitSignUp}>
              <h1 className="titles">Create Account</h1>
              <input
                className="register-input"
                type="text"
                placeholder="Username"
                name="signUpUsername"
                value={this.state.signUpUsername}
                onChange={this.handleChange}
                required
              />
              <input
                className="register-input"
                type="password"
                placeholder="Password"
                name="signUpPassword"
                value={this.state.signUpPassword}
                onChange={this.handleChange}
                required
              />
              <p className="response-message">{this.state.signUpMessage}</p>
              <button className="LogIn-buttons">Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form className="register-form" onSubmit={this.handleSubmitLogIn}>
              {this.state.authtenticationState === false ? (
                <>
                  <h1 className="titles">Sign In</h1>
                  <input
                    className="register-input"
                    type="text"
                    placeholder="Username"
                    name="logInUsername"
                    value={this.state.logInUsername}
                    onChange={this.handleChange}
                    required
                  />
                  <input
                    className="register-input"
                    type="password"
                    placeholder="Password"
                    name="logInPassword"
                    value={this.state.logInPassword}
                    onChange={this.handleChange}
                    required
                  />
                  <p className="response-message">{this.state.logInMessage}</p>
                  <button className="LogIn-buttons">Sign In</button>
                </>
              ) : (
                <h1>You are already logged in! </h1>
              )}
            </form>
          </div>

          {/* This is the overlay content. */}

          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 className="titles">Welcome Back</h1>
                <p className="message-paragraph">
                  To keep connected with us please login with your personal info
                </p>
                <button
                  className="LogIn-buttons ghost"
                  id="signIn"
                  onClick={() => this.handleChangeFormState("singIn")}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1 className="titles">Hello, Friend!</h1>
                <p className="message-paragraph">
                  Enter your personal details and start journey with us
                </p>
                <button
                  className="LogIn-buttons ghost"
                  id="signUp"
                  onClick={() => this.handleChangeFormState("signUp")}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default LogIn;
