import React, { Component } from 'react';
import { fetchMovies, generateUrl } from "../SearchPage/FetchMovies";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "../../components/Footer";
import "./MovieDetails.css";

class Details extends Component {
  state = {
    movie:{},
    link: "https://www.youtube.com/results?search_query=",
    
  }


  componentDidMount() {
    const search= this.props.location.search;
    console.log(search);
    const [_,id] = search.split("=");
    console.log(id);
    

    fetchMovies(generateUrl() +`/${id}`).then(json  => {
      this.setState({movie:json})
      const rightLink = this.state.link + this.state.movie.Title;
      console.log(rightLink);
    })
  }
  
 

  render(){
    const {movie} = this.state;
    const {link} = this.state;
    return (
        <div className="MovieContainer">
          <div className="descriptionContainer">
          <div className="imageContainer">
          <img  className="MovieImage" src = {movie.Poster} alt="text"  ></img>
          </div>
          <div className="descriprionContainer">
            <div className="movieTitleContainer">
              <p className="MovieTitle">{movie.Title} </p>
            </div>
            <div className="movieInfoContainer">
                <p className="MovieInfo"><span>Year:</span>  {movie.Year}</p>
                <p className="MovieInfo"> <span>Run Time:</span>    {movie.Runtime}</p>
                <p className="MovieInfo"> <span>Genre:</span> {movie.Genre}</p>
                <p className="MovieInfo"><span>Language: </span>{movie.Language}</p>
                <p className="MovieInfo"><span>Country:</span> {movie.Country}</p>
                <p className="MovieInfo"><span>IMDb Rating:</span> {movie.imdbRating}</p>
                <p className="MovieInfo"><span>IMDb Votes:</span> {movie.imdbVotes}</p>
                <p className="MovieInfo"><span>IMDb ID:  </span> {movie.imdbID}</p>
                <Link to ={"/search-movie"}><button className="goBackButton">Go Back</button></Link>
              <a href = {link} target="_blank"><button className="goBackButton">See the Trailer</button></a>
            </div>
          
          </div>
          </div>

          

          <div className="Footer">
            <Footer />
          </div>
        </div>
        
    )
    }
  }
export default Details; 