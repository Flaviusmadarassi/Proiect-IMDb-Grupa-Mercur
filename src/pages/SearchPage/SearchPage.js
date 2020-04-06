import React, { Component } from 'react';
import { fetchMovie } from './FetchMovies';
import "./Container.css";
import  MovieRow from './MovieRow'


class Search extends Component {

  constructor(props) {
      super(props);
      this.state = {
        movies: [],
        isLoaded: false,
      }
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
  
    if (!isLoaded){
      return <div>Loading...</div>
    }
    else {
      
      return (
          <div className ="container-content">
            {
            movies.map((movie,index) => 
            <MovieRow movie_details = {movie} movie_index={index} />
            )}
          </div>
      );
    }
  }
}

export default Search;