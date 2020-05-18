import React, { Component } from "react";
import "./ContactForm.css";
class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  render() {
    return (
      <div className="custom-contact-section pb-4 text-light">
        <div className="container">
          <div className="row">
            <div className="col-12 mt-4 mb-2">
              <h2 className="mt-2 ">Get in touch</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <form
            id="contact-form"
            onSubmit={this.handleSubmit.bind(this)}
            method="POST"
          >
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.name}
                  onChange={this.onNameChange.bind(this)}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="exampleInputEmail1">E-mail address</label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  value={this.state.email}
                  onChange={this.onEmailChange.bind(this)}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                rows="3"
                value={this.state.message}
                onChange={this.onMessageChange.bind(this)}
              />
            </div>
            <button type="submit" className="btn sign-in-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {}
}

export default ContactForm;
