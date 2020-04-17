import React, { Component } from "react";
import { fetchMovies } from "./FetchMovies";
import "./SearchPage.css";
import MovieBox from "./MovieBox.js";
import WillPaginate from "./WillPaginate.js";


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputContent: "",
      movies: [],
      isLoaded: false,
      loading: false,
      message: "",
      pageCount: 0,
      currentPage: 0,
      totalItemsCount: 0
    };
  }

  handleOnInputChange = (event, skip = undefined) => {
    console.log(event);
    let query = '';
    if (typeof event === 'string') {
      query = event;
    } else {
      query = event.target.value;
    }

    this.setState({ inputContent: query, loading: true, message: "" });
    const all_movies = "https://movies-api-siit.herokuapp.com/movies";
    let searched_movies = all_movies + `?Title=^${query}`; // returns the first 10 movies whose Title contains searched movie
    if (skip) { searched_movies = searched_movies + `&skip=${skip * 10 - 10}`}

    fetchMovies(searched_movies).then((json) => {
      console.log("Results after search" + json);

      this.setState({ 
        isLoaded: true, 
        movies: json.results,
        pageCount: json.pagination.numberOfPages, 
        currentPage: json.pagination.currentPage,
        totalItemsCount: json.results.length * json.pagination.numberOfPages,
        inputContent: query
      });
    });
  };

  componentDidMount() {
    console.log("mounted");

    fetchMovies().then((json) => {
      console.log(json);

      this.setState({ 
        isLoaded: true, 
        movies: json.results, 
        pageCount: json.pagination.numberOfPages, 
        currentPage: json.pagination.currentPage,
        totalItemsCount: json.results.length * json.pagination.numberOfPages,
      });
    });
  }

  render() { 
    const { isLoaded, movies } = this.state;
    const { inputContent } = this.state;
    // console.warn(this.state);

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="search-page-container">
          <div className="input-container">
            <input
              className="search-input"
              type="text"
              value={this.state.inputContent}
              placeholder="Enter a movie title"
              onChange={this.handleOnInputChange}
            ></input>
            <i className="fa fa-search search-icon" aria-hidden="true"></i>
          </div>
          <div className="all-movies-container">
            {movies.map((movie, index) => (
              <MovieBox movie_details={movie} movie_index={index} />

            ))}
            
  
          </div>
          <div>
            <WillPaginate
            parentFetch={this.handleOnInputChange}
            pageCount={this.state.pageCount} 
            currentPage={this.state.currentPage}
            totalItemsCount={this.state.totalItemsCount}
            inputContent={this.state.inputContent}
            ></WillPaginate>
          </div>
        </div>
      );
    }
  }
}

export default Search;
