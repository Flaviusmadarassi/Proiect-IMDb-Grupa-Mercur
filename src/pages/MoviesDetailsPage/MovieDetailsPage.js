import React, { Component } from 'react';
import MovieBox from "../SearchPage/MovieBox";
import { fetchMovies } from "../SearchPage/FetchMovies";
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],


    }
  }}

  const all_movies = "https://movies-app-siit.herokuapp.com/movies";
  let movieID = all_movies + `?_id`;
  fetchMovies(movieID).then((json) => {
    console.log("Results after search" + json);

    this.setState ({
      movie: json.results
    })
  });
  render(){
    const {movie} = this.state;
    return (
        <div className="MovieContainer">
          <p className="MovieTitle">{this.state.movie.Title} </p>
          <img className="MovieImage"></img>
          <p className="MovieYear"></p>
          <p className="MovieRated"></p>
          <p className="MovieReleased"></p>
          <p className="MovieRunTime"></p>
          <p className="MovieGenre"></p>

          
        </div>
    )
    }
  
export default Details; 