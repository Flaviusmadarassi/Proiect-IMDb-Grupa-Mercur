import React, { Component } from "react";
import "./SearchPage.css";
import { fetchMovies } from "./SearchUtils";

class Search extends Component {
  state = {
    movies: [],
    moviePageNumber: 1,
  };

  componentDidMount() {
    fetchMovies().then((json) => {
      console.log(json);
      this.setState({ movies: json.results });
      json.results.forEach((movie) => {
        const movieContainer = document.createElement("div");
        const movieTitle = document.createElement("p");
        const movieImg = document.createElement("img");
        movieTitle.innerHTML = movie.Title;
        movieImg.setAttribute("src", movie.Poster);
        movieContainer.appendChild(movieTitle);
        movieContainer.appendChild(movieImg);
        document.querySelector(".movie-list").appendChild(movieContainer);
      });
    });
  }

  render() {
    return (
      <div className="searchPage">
        <div className="searchContainer">
          <h3>Search by:</h3>
          <div className="inputContainer">
            <input className="input" type="text" placeholder="Name" />
            <input className="input" type="text" placeholder="Year" />
            <input className="input" type="text" placeholder="Genre" />
            <input className="input" type="text" placeholder="Language" />
            <input className="input" type="text" placeholder="Country" />
            <input className="input" type="text" placeholder="Run Time" />
          </div>
        </div>
        <div className="allMoviesContainer">
          <h2>ALL MOVIES</h2>
          <div className="movie-list"></div>
        </div>
      </div>
    );
  }
}

export default Search;
