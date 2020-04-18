import React, { Component } from "react";
import "./SearchPage.css";

class MovieBox extends Component {

    render() {
        return <div className='content-container-movies' >
            <p className='movie-title'>{this.props.movie_details.Title}</p>
            <img src={this.props.movie_details.Poster}></img>
            <p className='movie-genre'>{this.props.movie_details.Genre}</p>
            <p className='movie-year'>{this.props.movie_details.Year}</p>
            <p className='raiting-number'><span className="fa fa-star checked"></span>{this.props.movie_details.imdbRating}</p>


        </div>
    }

}

export default MovieBox;
