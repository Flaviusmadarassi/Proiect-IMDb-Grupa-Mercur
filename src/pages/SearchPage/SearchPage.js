import React, { Component } from 'react';
import { fetchMovie } from './FetchMovies';
import "./SearchPage.css";
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
      filters: {
        'Title': 'titlu-test',
        'Genre': '',
        'Year': '',
        'Language': '',
        'Country': '',
        'Runtime': '',
        'Rating': ''
      },
      movieUrl: 'https://movies-api-siit.herokuapp.com/movies?'
    }
  }

  handleMovieUrl = () => {
    const { filters, movieUrl } = this.state;
    let partialUrl = ''

    for (let k in filters) {
      if (filters[k] !== '') {
        if (movieUrl.slice(-1) === '?') {
          partialUrl = k + `=${filters[k]}`; //If is the first condition

        }
        else {
          partialUrl = '&' + k + `=${filters[k]}`; //If we have another condition before

        }
        const finalUrl = movieUrl + partialUrl;
        this.setState({
          movieUrl: finalUrl
        })
        console.log('2.MOvie URL: ' + movieUrl);
        console.log('Partial URL: ' + partialUrl);
        console.log('Final URL: ' + finalUrl);
      }
    }
  }



  handleOnSearchChange = (event) => {
    const { movieUrl, filters } = this.state;
    const query = event.target.value;
    this.setState({ inputContent: query, loading: true, message: '' });
    const all_movies = 'https://movies-api-siit.herokuapp.com/movies';
    const searched_movies = all_movies + `?Title=^${query}`; // returns the first 10 movies whose Title contains searched movie

    //Update dictionary
    this.setState(
      prevState => {
        // Taking a copy of the initial filters obj         
        const { filters } = prevState;
        // Updating it's property as per the key, value pair retrieved (key being the filter, value being "on" or "off")        
        filters['Title'] = query;
        // Returning the updated object         
        return { filters };
      },
      // Since setState is async, all operations that require the updated state, should be done here       
      () => {
        console.log('1.Dictionar updatat');
        console.log(this.state.filters);
      }
    );
    console.log(filters);
    this.handleMovieUrl();

    fetchMovie(movieUrl).then(json => {
      console.log('3.Results after search' + json);

      this.setState({
        isLoaded: true,
        movies: json.results,
      })
    });

  }



  handleGenreChange = selectedGenre => {

    const all_movies = 'https://movies-api-siit.herokuapp.com/movies';
    const searched_genre = all_movies + `?Genre=${selectedGenre.value}`; // returns the first 10 movies whose genre contains searched genre
    console.log(selectedGenre.value);

    fetchMovie(searched_genre).then(json => {
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
    const all_movies = 'https://movies-api-siit.herokuapp.com/movies';
    const chosen_year_url = all_movies + `?Year=${query}`; // returns the first 10 movies whose year of production is the searched year from the input
    console.log('ce am scris ' + query);
    console.log('url cu year ' + chosen_year_url);

    fetchMovie(chosen_year_url).then(json => {
      console.log('Results after year is selected' + json);

      this.setState({
        isLoaded: true,
        movies: json.results,
      })
    });

  };
  handleLanguageChange = selectedLanguage => {

    const all_movies = 'https://movies-api-siit.herokuapp.com/movies';
    const chosen_language_url = all_movies + `?Language=${selectedLanguage.value}`; // returns the first 10 movies whose Title contains searched movie
    console.log(chosen_language_url);

    fetchMovie(chosen_language_url).then(json => {
      console.log('Results after option is selected' + json);

      this.setState({
        isLoaded: true,
        movies: json.results,
      })

      console.log('movies ' + this.movies);
    });

  };
  handleCountryChange = selectedCountry => {

    const all_movies = 'https://movies-api-siit.herokuapp.com/movies';
    const chosen_country_url = all_movies + `?Country=${selectedCountry.value}`; // returns the first 10 movies whose genre contains searched genre
    console.log(selectedCountry.value);

    fetchMovie(chosen_country_url).then(json => {
      console.log('Results after option is selected' + json);

      this.setState({
        isLoaded: true,
        movies: json.results,
      })
    });

  };

  handleRuntimeChange = changeEvent => {

    const all_movies = 'https://movies-api-siit.herokuapp.com/movies';
    const chosen_runtime_url = all_movies + `?Runtime=${changeEvent} min`; // returns the first 10 movies whose genre contains searched genre
    console.log(changeEvent);

    fetchMovie(chosen_runtime_url).then(json => {
      console.log('Results after option is selected' + json);

      this.setState({
        isLoaded: true,
        movies: json.results,
      })
    });

  };

  handleImdbRatingChange = changeEvent => {

    const all_movies = 'https://movies-api-siit.herokuapp.com/movies';
    const chosen_ImdbRating_url = all_movies + `?imdbRating=${changeEvent} `; // returns the first 10 movies whose genre contains searched genre
    console.log(changeEvent);

    fetchMovie(chosen_ImdbRating_url).then(json => {
      console.log('Results after option is selected' + json);

      this.setState({
        isLoaded: true,
        movies: json.results,
      })
    });

  };
  componentDidMount() {
    console.log("mounted");

    fetchMovie().then(json => {
      console.log(json);

      this.setState({
        isLoaded: true,
        movies: json.results,
      })
    });
  }

  render() {
    const { isLoaded, movies } = this.state;

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
            <div className="all-movies-container">
              {
                movies.map((movie, index) =>
                  <MovieBox movie_details={movie} movie_index={index} key={movie._id} />
                )}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Search;