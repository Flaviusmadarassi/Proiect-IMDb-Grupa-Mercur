import React, { Component } from "react";
import { fetchMovies } from "./FetchMovies.js";
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
import { generateUrl } from './SearchPageUtils'
import Footer from "../../components/Footer"





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
      totalItemsCount: 0,
      filters: {
        'Title': '',
        'Genre': '',
        'Year': '',
        'Language': '',
        'Country': '',
        'Runtime': '',
        'imdbRating': '',
        "skip": ''
      },


    }
  }

  // handleOnInputChange = (event, skip = undefined) => {
  //   console.log(event);
  //   let query = '';
  //   if (typeof event === 'string') {
  //     query = event;
  //   } else {
  //     query = event.target.value;
  //   }

  //   this.setState({ inputContent: query, loading: true, message: "" });
  //   const all_movies = "https://movies-app-siit.herokuapp.com/movies";
  //   let searched_movies = all_movies + `?Title=^${query}`; // returns the first 10 movies whose Title contains searched movie
  //   if (skip) { searched_movies = searched_movies + `&skip=${skip * 5 - 5}`}

  //   fetchMovies(searched_movies).then((json) => {
  //     console.log("Results after search", json);
      

  //     this.setState({
  //       isLoaded: true,
  //       movies: json.results,
  //       pageCount: json.pagination.numberOfPages,
  //       currentPage: json.pagination.currentPage,
  //       totalItemsCount: json.results.length * json.pagination.numberOfPages,
  //       inputContent: query
  //     });
      
  //   });
  // };


  //Updates dictionary valyes with selected options
  updateDictionary = (filterOption, newValue, skip = '') => {
    //Update dictionary
    this.setState(
      prevState => {
        // Taking a copy of the initial filters obj         
        const { filters } = prevState;
        // Updating it's property as per the key, value pair retrieved (key being the filter, value being "on" or "off")        
        filters[filterOption] = newValue;
        filters["skip"] = skip;
        // Returning the updated object  
        console.log(filters)       
        return { filters };
      },
      // Since setState is async, all operations that require the updated state, should be done here       
      () => {
        console.log('1.Dictionar updatat');
        console.log(this.state.filters);

        //Generates the url after the dictionary was updated
        let url = generateUrl(this.state.filters);

        console.log("url", url);
        //Fetch movies based on the new url (which contains selected filters)
        fetchMovies(url).then(json => {
          console.log('3.Results after search', json);

          this.setState({
            isLoaded: true,
            movies: json.results,
            pageCount: json.pagination.numberOfPages,
            currentPage: json.pagination.currentPage,
            totalItemsCount: json.results.length * json.pagination.numberOfPages
          })
        });
        if (skip === '') {
          console.log('this.state.currentPage', this.state.currentPage)
          this.setState({
            currentPage: 1
          })
        }
      }
    );

  }

 
  handleOnSearchChange = (inputValue) => {

    this.setState({ inputContent: inputValue, loading: true });

    //Update dictionary with custom filters
    this.updateDictionary('Title', inputValue);

  }

  handleGenreChange = selectedGenre => {

    //Update dictionary with custom filters
    this.updateDictionary('Genre', selectedGenre.value);

  };

  handleYearChange = (event) => {

    const query = event.target.value;
    this.setState({ inputYearContent: query, loading: true });

    //Update dictionary with custom filters
    this.updateDictionary('Year', query);

  };

  handleLanguageChange = selectedLanguage => {

    //Update dictionary with custom filters
    this.updateDictionary('Language', selectedLanguage.value);

  };

  handleCountryChange = selectedCountry => {


    //Update dictionary with custom filters
    this.updateDictionary('Country', selectedCountry.value);

  };

  handleRuntimeChange = changeEvent => {
    let selectedRuntime = changeEvent + " min";

    //Update dictionary with custom filters
    this.updateDictionary('Runtime', selectedRuntime);

  };

  handleImdbRatingChange = changeEvent => {

    //Update dictionary with custom filters
    this.updateDictionary('imdbRating', changeEvent);

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



    if (!isLoaded) {
      return <div>Loading...</div>
    }
    else {

      return (

        <div className="search-page-container" >
          <SearchFilter onSearchFilter={this.handleOnSearchChange} />
          <div className="content" >
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
            parentFetch={this.updateDictionary}
            pageCount={this.state.pageCount} 
            currentPage={this.state.currentPage}
            totalItemsCount={this.state.totalItemsCount}
            inputContent={this.state.inputContent}
            newValue={this.state.newValue}
            ></WillPaginate>
             </div>
            </div>
            

          </div>
          <div className="Footer">
            <Footer />
            </div>
          
        </div >
        
        
      );
    }
  }
}

export default Search;
