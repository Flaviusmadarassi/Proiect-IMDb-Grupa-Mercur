import React, { Component } from "react";
import "./EditMoviePage.css";

class AddMovie extends Component {
  state = {
    Title: "",
    Year: "",
    imdbID: "",
    Type: "",
    Poster: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  addMovie = () => {
    const token = document.cookie
      .split(";")
      .find((element) => {
        if (element.includes("token")) return true;
      })
      .split("=")[1];

    fetch(`https://movies-app-siit.herokuapp.com/movies`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": token,
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      body: JSON.stringify({
        Title: this.state.Title,
        Year: this.state.Year,
        imdbID: this.state.imdbID,
        Type: this.state.Type,
        Poster: this.state.Poster,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  };

  render() {
    return (
      <div className ="Container">
        <h2>Add Movie</h2>
        <form className="addMovieForm">
          <input
            type="text"
            name="Title"
            placeholder="Insert movie title"
            value={this.state.Title}
            onChange={this.handleChange}
            required
          />
          <input
            type="text"
            name="Year"
            placeholder="Insert movie year"
            value={this.state.Year}
            onChange={this.handleChange}
            required
          />
          <input
            type="text"
            name="imdbID"
            placeholder="Insert movie ID"
            value={this.state.imdbID}
            onChange={this.handleChange}
            required
          />
          <input
            type="text"
            name="Type"
            placeholder="Insert movie genre"
            value={this.state.Type}
            onChange={this.handleChange}
            required
          />
          <input
            type="text"
            name="Poster"
            placeholder="Insert poster URL"
            value={this.state.Poster}
            onChange={this.handleChange}
            required
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.addMovie}
          >
            Add new Movie
          </button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
