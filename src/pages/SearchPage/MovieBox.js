import React, { Component } from "react";
// import {HandleDetailsButtonClick} from "./MovieDetailsUtils"; 

// import { browserHistory } from "react-router"; 
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import "./SearchPage.css";
import "./MovieBox.css";


class MovieBox extends Component {


    render() {


        return <div className='content-container-movies' >
            <p className='movie-title'>{this.props.movie_details.Title}</p>
            <img src={this.props.movie_details.Poster}></img>
            <p className='movie-genre'>{this.props.movie_details.Genre}</p>
            <p className='movie-year'>{this.props.movie_details.Year}</p>
            <p className='movie-language'>{this.props.movie_details.Language}</p>
            <p className='movie-country'>{this.props.movie_details.Country}</p>
            <p className='movie-runtime'>{this.props.movie_details.Runtime}</p>
            <p className='movie-raiting-number'><span className="fa fa-star checked"></span>{this.props.movie_details.imdbRating}</p>
            {/* <p className='raiting-number'><span className="fa fa-star checked">
            </span>{this.props.movie_details.imdbRating}</p> */}
            <div className ="containerButtonMovieDetails">
                <Link to={"/movie-details?id="+this.props.movie_details._id}><button className = "buttonMovieDetails">View Details</button></Link>
            </div>
            


        </div>
    }

}

export default MovieBox;
