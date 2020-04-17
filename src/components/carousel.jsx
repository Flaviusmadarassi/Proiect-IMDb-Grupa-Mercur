import React, { Component } from "react";


import Carousel from "react-bootstrap/Carousel";

class CarouselComponent extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch("https://movies-api-siit.herokuapp.com/movies")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);

        this.setState({ movies: json.results });
      });
  }

  render() {
    return (
      <Carousel>
        {this.state.movies.map((movie, index) => {
          return (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={movie.Poster}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{movie.Title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }
}

export default CarouselComponent;
