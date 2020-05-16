import React, { Component } from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Footer from "../../components/Footer";
import "./AddPage.css";
import addMovie from "./AddPageUtils.js";

class Add extends Component {
  state = {
    Title: "",
    Year: "",
    Genre: "",
    Poster: "",
    Country: "",
    Language: "",
    Runtime: "",
    ImdbVotes: "",
    ImdbRating: "",
    imdbID: "",
    Type: "",
  };

  submitHandler = (event) => {
    event.preventDefault();
    // event.target.className += " was-validated";
    let data = this.createData();
    addMovie(data);
    this.setState({
      Title: "",
      Year: "",
      Genre: "",
      Poster: "",
      Country: "",
      Language: "",
      Runtime: "",
      ImdbVotes: "",
      ImdbRating: "",
      imdbID: "",
      Type: "",
    });
  };

  createData = () => {
    let data = {
      Title: this.state.Title,
      Country: this.state.Country,
      Year: this.state.Year,
      Genre: this.state.Genre,
      Language: this.state.Language,
      Runtime: this.state.Runtime,
      ImdbVotes: this.state.ImdbVotes,
      ImdbRating: this.state.ImdbRating,
      Poster: this.state.Poster,
      imdbID: this.state.imdbID,
      Type: this.state.Type,
    };

    return data;
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="AllPage">
        <div className="container">
          <form className="needs-validation" onSubmit={this.submitHandler}>
            <div className="container-row">
              <MDBRow>
                <MDBCol md="4">
                  <label
                    htmlFor="defaultFormRegistertitle"
                    className="grey-text"
                  >
                    Movie title :
                  </label>
                  <input
                    value={this.state.Title}
                    name="Title"
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegistertitle"
                    className="form-control"
                    placeholder="Movie title"
                    required
                  />
                  <div className="invalid-feedback">
                    Please fill out this field.
                  </div>
                </MDBCol>
                <MDBCol md="4">
                  <label
                    htmlFor="defaultFormRegisterImdbID"
                    className="grey-text"
                  >
                    Imdb ID title :
                  </label>
                  <input
                    value={this.state.imdbID}
                    name="imdbID"
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterImdbID"
                    className="form-control"
                    placeholder="ImdbID"
                    required
                  />
                  <div className="invalid-feedback">
                    Please fill out this field.
                  </div>
                </MDBCol>
              </MDBRow>
            </div>
            <div className="container-row">
              <MDBRow>
                <MDBCol md="4">
                  <label
                    htmlFor="defaultFormRegistergenre"
                    className="grey-text"
                  >
                    Genre :
                  </label>
                  <input
                    value={this.state.Genre}
                    name="Genre"
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegistergenre"
                    className="form-control"
                    placeholder="Genre"
                    required
                  />
                  <div className="invalid-feedback">
                    Please fill out this field.
                  </div>
                </MDBCol>
                <MDBCol md="4">
                  <label
                    htmlFor="defaultFormRegisteryear"
                    className="grey-text"
                  >
                    Year :
                  </label>
                  <input
                    value={this.state.Year}
                    name="Year"
                    onChange={this.changeHandler}
                    type="number"
                    id="defaultFormRegisterYear"
                    className="form-control"
                    placeholder="Year"
                    required
                  />
                  <div className="invalid-feedback">
                    Please fill out this field.
                  </div>
                </MDBCol>
                <MDBCol md="4">
                  <label
                    htmlFor="defaultFormRegistercountry"
                    className="grey-text"
                  >
                    Country :
                  </label>
                  <input
                    value={this.state.Country}
                    name="Country"
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterCountry"
                    className="form-control"
                    placeholder="Country"
                    required
                  />
                  <div className="invalid-feedback">
                    Please fill out this field.
                  </div>
                </MDBCol>
              </MDBRow>
            </div>
            <div className="container-row">
              <MDBRow>
                <MDBCol md="8">
                  <label
                    htmlFor="defaultFormRegisterPoster"
                    className="grey-text"
                  >
                    Poster URL :
                  </label>
                  <input
                    value={this.state.Poster}
                    name="Poster"
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterPoster"
                    className="form-control"
                    placeholder="Poster URL"
                    required
                  />
                  <div className="invalid-feedback">
                    Please fill out this field.
                  </div>
                </MDBCol>
                <MDBCol md="4">
                  <label
                    htmlFor="defaultFormRegisterType"
                    className="grey-text"
                  >
                    Type :
                  </label>
                  <input
                    value={this.state.Type}
                    name="Type"
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterType"
                    className="form-control"
                    placeholder="Type"
                    required
                  />
                  <div className="invalid-feedback">
                    Please fill out this field.
                  </div>
                </MDBCol>
              </MDBRow>
            </div>
            <div className="container-row">
              <MDBRow>
                <MDBCol md="3">
                  <label
                    htmlFor="defaultFormRegisterLanguage"
                    className="grey-text"
                  >
                    Language :
                  </label>
                  <input
                    value={this.state.Language}
                    name="Language"
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterLanguage"
                    className="form-control"
                    placeholder="Language"
                    required
                  />
                  <div className="invalid-feedback">
                    Please fill out this field.
                  </div>
                </MDBCol>
                <MDBCol md="3">
                  <label
                    htmlFor="defaultFormRegisterRuntime"
                    className="grey-text"
                  >
                    Runtime :
                  </label>
                  <input
                    value={this.state.Runtime}
                    name="Runtime"
                    onChange={this.changeHandler}
                    type="number"
                    id="defaultFormRegisterRuntime"
                    className="form-control"
                    placeholder="Runtime"
                    required
                  />
                  <div className="invalid-feedback">
                    Please fill out this field.
                  </div>
                </MDBCol>
                <MDBCol md="3">
                  <label
                    htmlFor="defaultFormRegisterImdbVotes"
                    className="grey-text"
                  >
                    Imdb Votes :
                  </label>
                  <input
                    value={this.state.ImdbVotes}
                    name="ImdbVotes"
                    onChange={this.changeHandler}
                    type="number"
                    id="defaultFormRegisterImdbVotes"
                    className="form-control"
                    placeholder="Imdb Votes"
                    required
                  />
                  <div className="invalid-feedback">
                    Please fill out this field.
                  </div>
                </MDBCol>
                <MDBCol md="3">
                  <label
                    htmlFor="defaultFormRegisterImdbRating"
                    className="grey-text"
                  >
                    Imdb Rating :
                  </label>
                  <input
                    value={this.state.ImdbRating}
                    name="ImdbRating"
                    onChange={this.changeHandler}
                    type="number"
                    id="defaultFormRegisterImdbRating"
                    className="form-control"
                    placeholder="Imdb Rating"
                    required
                  />
                  <div className="invalid-feedback">
                    Please fill out this field.
                  </div>
                </MDBCol>
              </MDBRow>
            </div>
            <div className="add-button-container">
              <MDBBtn color="success" type="submit">
                Add movie
              </MDBBtn>
            </div>
          </form>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Add;
