import React, { Component } from 'react';
import { fetchMovies, generateUrl } from "../SearchPage/FetchMovies";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
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
                <div className="MovieInfo">
                  <p className="TitileInfo">Year:</p> 
                  <p>{movie.Year}</p>
                 </div>
                <div className="MovieInfo"> 
                  <p className="TitileInfo">Run Time:</p>   
                  <p>{movie.Runtime}</p>
                </div>
                <div className="MovieInfo"> 
                  <p className="TitileInfo">Genre:</p> 
                  <p>{movie.Genre}</p>
                </div>
                <div className="MovieInfo">
                  <p className="TitileInfo">Language: </p>
                  <p>{movie.Language}</p>
                </div>
                <div className="MovieInfo">
                  <p className="TitileInfo">Country:</p>
                  <p>{movie.Country}</p>
                </div>
                <div className="MovieInfo">
                  <p className="TitileInfo"> IMDb Rating:</p>
                  <p>{movie.imdbRating}</p>
                </div>
                <div className="MovieInfo">
                  <p className="TitileInfo">IMDb Votes:</p> 
                  <p>{movie.imdbVotes}</p>
                </div>
                <div className="MovieInfo">
                  <p className="TitileInfo">IMDb ID:  </p>
                  <p>{movie.imdbID}</p>
                </div>
            </div>
            <div className="buttonsDetailsPage">
            <div className="GoBackButtonContainer">
            <Link to ={"/search-movie"}><button className="goBackButton">Go Back</button></Link>
            </div>
            <div className="YouTubeButtonContainer">
            <p>Go to YouTube here</p>
            <a href = {link} target="_blank" 
              rel="noopener noreferrer"
              className="youtube social DetailsLink"
              >
                {/* <button className="goBackButton">Go to YouTube</button> */}
                <FontAwesomeIcon icon={faYoutube} size="2x" />
             </a>
            </div>
            
              
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