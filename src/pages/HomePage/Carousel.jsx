import React, { Component } from "react";

import "./Carousel.css";
import {
  getMoveCssClass,
  disableButtonLeft,
  disableButtonRight,
} from "./CarouselUtils";

class Carousel extends Component {
  state = {
    movies: [],
    displayMovies: [],
    moveRight: false,
    moveLeft: false,
    movieIndex: 0,
  };

  componentDidMount() {
    fetch("https://movies-app-siit.herokuapp.com/movies?take=1000")
      .then((response) => response.json())
      .then((json) => {
        //console.log(json);
        const totalMovies = json.results.filter((movie) => movie.Poster);
        this.setState({
          movies: totalMovies,
          displayMovies: totalMovies.slice(0, 5),
        });
      });
  }
  moveRight = () => {
    this.setState({ moveRight: true });
    setTimeout(() => {
      const newIndex = this.state.movieIndex + 1;
      this.setState({
        movieIndex: newIndex,
        displayMovies: this.state.movies.slice(newIndex, newIndex + 5),
        moveRight: false,
      });
    }, 500);
  };
  moveLeft = () => {
    this.setState({ moveLeft: true });
    setTimeout(() => {
      const newIndex = this.state.movieIndex - 1;
      this.setState({
        movieIndex: newIndex,
        displayMovies: this.state.movies.slice(newIndex, newIndex + 5),
        moveLeft: false,
      });
    }, 500);
  };

  render() {
    console.log(this.state.displayMovies);
    let imgBackgroundUrl =
      this.state.displayMovies[this.state.movieIndex] &&
      this.state.displayMovies[this.state.movieIndex].Poster;
    return (
      <div className="custom-carousel-container-background">
        <img
          alt=""
          className="custom-carousel-background"
          src={imgBackgroundUrl}
        />
        <div
          style={{ backgroundImage: `url(${this.state.displayMovies[0]})` }}
          className="custom-carousel-container"
        >
          <div className="custom-carousel-title">
            <h1>What to watch</h1>
            <div className="custom-carousel-nav">
              <p
                className={`custom-carousel-nav-left${disableButtonLeft(
                  this.state.movieIndex,
                  this.state.movies
                )}`}
                onClick={this.moveLeft}
              >
                {"<"}
              </p>
              <p
                className={`custom-carousel-nav-right${disableButtonRight(
                  this.state.movieIndex,
                  this.state.movies
                )}`}
                onClick={this.moveRight}
              >
                {">"}
              </p>
            </div>
          </div>
          <div className="custom-carousel-item-display">
            <div
              className={`custom-carousel-item-container${getMoveCssClass(
                this.state.moveRight,
                this.state.moveLeft
              )}`}
            >
              {this.state.displayMovies.map((item) => (
                <div key={item._id} className="custom-carousel-item">
                  <img
                    src={item.Poster}
                    className="custom-carousel-item-img"
                  ></img>
                  <p className="custom-carousel-item-title">{item.Title}</p>
                  <p className="custom-carousel-item-genre">{item.Genre}</p>
                  <p className="custom-carousel-item-rating">
                    {item.imdbRating}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
