import React, { Component } from "react";
import "./LogIn.css";

class LogIn extends Component {
  state = {
    signUpUsername: "",
    signUpPassword: "",
    logInUsername: "",
    logInPassword: "",
    formState: "signIn",
  };

  componentDidMount() {}

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
        console.log(json);

        document.cookie = `token=${json.accessToken}`;
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
        console.log(json);

        document.cookie = `token=${json.accessToken}`;
      });
    event.preventDefault();
  };

  render() {
    return (
      <div className="body">
        <div
          className={
            "container" +
            (this.state.formState === "signUp" ? " right-panel-active" : "")
          }
          id="container"
        >
          <div className="form-container sign-up-container">
            <form className="register-form" onSubmit={this.handleSubmitSignUp}>
              <h1 className="h1">Create Account</h1>
              <input
                className="register-input"
                type="text"
                placeholder="Username"
                name="signUpUsername"
                value={this.state.username}
                onChange={this.handleChange}
                required
              />
              <input
                className="register-input"
                type="password"
                placeholder="Password"
                name="signUpPassword"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
              <button className="button" type="submit">
                Sign Up
              </button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form className="register-form" onSubmit={this.handleSubmitLogIn}>
              <h1 className="h1">Sign In</h1>
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
              <button className="button">Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 className="h1">Welcome Back</h1>
                <p className="p">
                  To keep connected with us please login with your personal info
                </p>
                <button
                  className="button ghost"
                  id="signIn"
                  onClick={() => this.handleChangeFormState("singIn")}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1 className="h1">Hello, Friend!</h1>
                <p className="p">
                  Enter your personal details and start journey with us
                </p>
                <button
                  className="button ghost"
                  id="signUp"
                  onClick={() => this.handleChangeFormState("signUp")}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;
