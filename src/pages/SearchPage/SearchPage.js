import React, { Component } from "react";
import { fetchMovies } from "./FetchMovies";
import "./SearchPage.css";
import WillPaginate from "./WillPaginate.js";
import MovieBox from './MovieBox.js';
import Genre from './GenreFilter.js';
import Year from './YearFilter.js';
import SearchFilter from './SearchFilter.js';
import Language from './LanguageFilter.js';
import Country from './CountryFilter.js';
import { RuntimeFilter } from './RuntimeFilter.js';
import { ImdbRatingFilter } from './ImdbRatingFilter.js';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {

      inputContent: '',
      inputYearContent: '',
      movies: [],
      isLoaded: false,
      loading: false,
      message: '',
      pageCount: 0,
      currentPage: 0,
      totalItemsCount: 0
    }
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
    const all_movies = "https://movies-app-siit.herokuapp.com/movies";
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
  
  handleOnSearchChange = (event) => {
    const query = event.target.value;
    this.setState({ inputContent: query, loading: true, message: '' });
    const all_movies = 'https://movies-app-siit.herokuapp.com/movies';
    const searched_movies = all_movies + `?Title=^${query}`; // returns the first 10 movies whose Title contains searched movie

    fetchMovies(searched_movies).then(json => {
      console.log('Results after search' + json);

      this.setState({
        isLoaded: true,
        movies: json.results,
      })
    });

  }
  handleGenreChange = selectedGenre => {

    const all_movies = 'https://movies-app-siit.herokuapp.com/movies';
    const searched_genre = all_movies + `?Genre=${selectedGenre.value}`; // returns the first 10 movies whose genre contains searched genre
    console.log(selectedGenre.value);

    fetchMovies(searched_genre).then(json => {
      console.log('Results after option is selected' + json);

      this.setState({
        isLoaded: true,
        movies: json.results,
      })
    });

  };

  handleYearChange = (event) => {
    const query = event.target.value;
    this.setState({ inputYearContent: query, loading: true });
    const all_movies = 'https://movies-app-siit.herokuapp.com/movies';
    const chosen_year_url = all_movies + `?Year=${query}`; // returns the first 10 movies whose year of production is the searched year from the input
    console.log('ce am scris ' + query);
    console.log('url cu year ' + chosen_year_url);

    fetchMovies(chosen_year_url).then(json => {
      console.log('Results after year is selected' + json);

      this.setState({
        isLoaded: true,
        movies: json.results,
      })
    });

  };
  handleLanguageChange = selectedLanguage => {

    const all_movies = 'https://movies-app-siit.herokuapp.com/movies';
    const chosen_language_url = all_movies + `?Language=${selectedLanguage.value}`; // returns the first 10 movies whose Title contains searched movie
    console.log(chosen_language_url);

    fetchMovies(chosen_language_url).then(json => {
      console.log('Results after option is selected' + json);

      this.setState({
        isLoaded: true,
        movies: json.results,
      })

      console.log('movies ' + this.movies);
    });

  };
  handleCountryChange = selectedCountry => {

    const all_movies = 'https://movies-app-siit.herokuapp.com/movies';
    const chosen_country_url = all_movies + `?Country=${selectedCountry.value}`; // returns the first 10 movies whose genre contains searched genre
    console.log(selectedCountry.value);


    fetchMovies(chosen_country_url).then(json => {
      console.log('Results after option is selected' + json);

      this.setState({
        isLoaded: true,
        movies: json.results,
      })
    });

  };

  handleRuntimeChange = changeEvent => {

    const all_movies = 'https://movies-app-siit.herokuapp.com/movies';
    const chosen_runtime_url = all_movies + `?Runtime=${changeEvent} min`; // returns the first 10 movies whose genre contains searched genre
    console.log(changeEvent);

    fetchMovies(chosen_runtime_url).then(json => {
      console.log('Results after option is selected' + json);

      this.setState({
        isLoaded: true,
        movies: json.results,
      })
    });

  };

  handleImdbRatingChange = changeEvent => {

    const all_movies = 'https://movies-app-siit.herokuapp.com/movies';
    const chosen_ImdbRating_url = all_movies + `?imdbRating=${changeEvent} `; // returns the first 10 movies whose genre contains searched genre
    console.log(changeEvent);

    fetchMovies(chosen_ImdbRating_url).then(json => {
      console.log('Results after option is selected' + json);

      this.setState({
        isLoaded: true,
        movies: json.results,
      })
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
        totalItemsCount: json.results.length * json.pagination.numberOfPages
      })
    });
  }

  render() {
    const { isLoaded, movies } = this.state;
    const { inputContent } = this.state;
    //console.warn(this.state);


    if (!isLoaded) {
      return <div>Loading...</div>
    }
    else {

      return (

        <div className="search-page-container">
          <SearchFilter onSearchFilter={this.handleOnSearchChange} searchInput={this.inputContent} />
          <div className="content">
            <div className="filters-container">
              <Genre onFilterChange={this.handleGenreChange} />
              <Year onYearChange={this.handleYearChange} yearInput={this.inputYearContent} />
              <Language onLanguageChange={this.handleLanguageChange} />
              <Country onCountryChange={this.handleCountryChange} />
              <RuntimeFilter onRuntimeChange={this.handleRuntimeChange} />
              <ImdbRatingFilter onImdbRatingChange={this.handleImdbRatingChange} />
            </div>
            <div className="moviePaginationContainer">
            <div className="all-movies-container">
              {
                movies.map((movie, index) =>
                  <MovieBox movie_details={movie} movie_index={index} key={movie._id} />
                )}
            </div>
            <div className = "paginationContainer">
            <WillPaginate
            parentFetch={this.handleOnInputChange}
            pageCount={this.state.pageCount} 
            currentPage={this.state.currentPage}
            totalItemsCount={this.state.totalItemsCount}
            inputContent={this.state.inputContent}
            ></WillPaginate>
             </div>
            </div>
            

          </div>
        </div>
      );
    }
  }
}

export default Search;
