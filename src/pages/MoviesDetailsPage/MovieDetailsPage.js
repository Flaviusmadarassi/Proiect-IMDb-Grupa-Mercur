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
            <p className="MovieInfo"><span>Year:</span>  {movie.Year}</p>
    <p className="MovieInfo"> <span>Run Time:</span>    {movie.Runtime}</p>
    <p className="MovieInfo"> <span>Genre:</span> {movie.Genre}</p>
    <p className="MovieInfo"><span>Language: </span>{movie.Language}</p>
    <p className="MovieInfo"><span>Country:</span> {movie.Country}</p>
    <p className="MovieInfo"><span>IMBd Rating:</span> {movie.imdbRating}</p>
    <p className="MovieInfo"><span>IMBd Votes:</span> {movie.imdbVotes}</p>
    <p className="MovieInfo"><span>IMBd ID:  </span> {movie.imdbID}</p>

            </div>
          
          </div>
          

          
        </div>
    )
    }
  }
export default Details; 