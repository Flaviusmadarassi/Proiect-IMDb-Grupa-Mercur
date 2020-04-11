import React, { Component } from 'react';
import { fetchMovie } from './FetchMovies';
import "./SearchPage.css";
import  MovieBox from './MovieBox.js'


class Search extends Component {

  constructor(props) {
      super(props);
      this.state = {
        inputContent:'',
        movies: [],
        isLoaded: false,
        loading : false,
        message: ''
      }
  }

  handleOnInputChange  = ( event ) =>{
    const query = event.target.value;
    this.setState({ inputContent : query , loading: true, message: ''});
    const all_movies='https://movies-api-siit.herokuapp.com/movies';
    const searched_movies=all_movies+`?Title=^${query}`; // returns the first 10 movies whose Title contains searched movie
    
    fetchMovie(searched_movies).then(json => {
      console.log('Results after search'+ json);

      this.setState({ isLoaded: true,
                      movies: json.results,
                    })
    });
   
  }

  componentDidMount() {
    console.log("mounted");

    fetchMovie().then(json => {
      console.log(json);

      this.setState({ isLoaded: true,
                      movies: json.results,
                    })
    });
  }
 
  render() {
    const { isLoaded, movies} = this.state;
    const { inputContent } = this.state;
    //console.warn(this.state);
    
  
    if (!isLoaded){
      return <div>Loading...</div>
    }
    else { 
      
      return (
          
          <div className ="search-page-container">
              <div className="input-container">
                <input className="search-input"  type ="text" value={inputContent} placeholder="Enter a movie title"  onChange={this.handleOnInputChange}></input>
                <i className="fa fa-search search-icon" aria-hidden="true"></i>
              </div>
              <div className ="all-movies-container">
                    {
                    movies.map((movie,index) => 
                    <MovieBox movie_details = {movie} movie_index={index} />
                    )}
              </div>
          </div>
      );
    }
  }
}

export default Search;