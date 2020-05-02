import React, { Component } from 'react';
import { fetchMovies, generateUrl } from "../SearchPage/FetchMovies";
import "./MovieDetails.css";

class Details extends Component {
  state = {
    movie:{}
  }

  componentDidMount() {
    const search= this.props.location.search;
    console.log(search);
    const [_,id] = search.split("=");
    console.log(id);

    fetchMovies(generateUrl() +`/${id}`).then(json  => {
      this.setState({movie:json})
    })
  }

  render(){
    const {movie} = this.state;
    return (
        <div className="MovieContainer">
          <div className="imageContainer">
          <img  className="MovieImage" src = {movie.Poster} alt="text"></img>
          </div>
          <div className="detailsContainer">
            <div className="movieTitleContainer">
              <p className="MovieTitle">{movie.Title} </p>
            </div>
            <div className="movieInfoContainer">
            <p className="MovieYear">Movie year:  {movie.Year}</p>
          <p className="MovieRated"></p>
          <p className="MovieReleased"></p>
          <p className="MovieRunTime"></p>
          <p className="MovieGenre"></p>

            </div>
          
          </div>
          

          
        </div>
    )
    }
  }
export default Details; 