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
      selectedGenre: null,
      selectedLanguage: null,
      selectedCountry: null,
      inputContent: '',
      inputYearContent: '',
      titleInput: '',
      runtimeValue: 0,
      imdbRatingValue: 0,
      movies: [],
      isLoaded: false,
      loading: false,
      message: '',
      pageCount: 0,
      currentPage: 0,
      totalItemsCount: 0,
      allPagesCount:0,
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

  resetAllFilters = () => {
    this.setState({
      selectedGenre: null,
      selectedLanguage: null,
      selectedCountry: null,
      inputYearContent: '',
      inputContent: '',
      runtimeValue: 0,
      imdbRatingValue: 0,
      filters: {
        'Title': '',
        'Genre': '',
        'Year': '',
        'Language': '',
        'Country': '',
        'Runtime': '',
        'imdbRating': ''
      }
    }, () => {
      console.log('resetare filtre', this.state);

      const url = generateUrl(this.state.filters);
      fetchMovies(url).then(json => {
        this.setState({
          isLoaded: true,
          movies: json.results,
          pageCount: json.pagination.numberOfPages,
          currentPage: json.pagination.currentPage,
          totalItemsCount: json.results.length * json.pagination.numberOfPages
        })
      });

    });
  }



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
        console.log("logo")

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
            totalItemsCount: json.results.length * json.pagination.numberOfPages,
            allPagesCount:json.pagination.numberOfPages
          })
          console.log("all pages",this.state.allPagesCount );
          // if ( this.state.allPagesCount=== 0) {
          //   console.log("no results");
          //   };
        });
        if (skip === '') {
          
          this.setState({
            currentPage: 1
          })
          console.log('this.state.currentPage', this.state.currentPage)

        }
            
        
        }
      
    );

  }

  handleOnSearchChangeValue = (inputValue) => {
    this.setState({
      inputContent: inputValue
    })
  }

  handleOnSearchChange = (inputValue) => {

    this.setState({ inputContent: inputValue, loading: true });

    //Update dictionary with custom filters
    this.updateDictionary('Title', inputValue);

  }

  handleGenreChange = selectedGenre => {

    //Update dictionary with custom filters
    this.updateDictionary('Genre', selectedGenre.value);
    this.setState({ selectedGenre });

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
    this.setState({ selectedLanguage });
  };

  handleCountryChange = selectedCountry => {


    //Update dictionary with custom filters
    this.updateDictionary('Country', selectedCountry.value);
    this.setState({ selectedCountry });

  };

  handleRuntimeChangeValue = (runtimeValue) => {
    this.setState({
      runtimeValue
    })
  }

  handleRuntimeChange = changeEvent => {
    let selectedRuntime = changeEvent + " min";

    //Update dictionary with custom filters
    this.updateDictionary('Runtime', selectedRuntime);

  };

  handleImdbRantingChangeValue = (imdbRatingValue) => {
    this.setState({
      imdbRatingValue
    })
  }
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
        totalItemsCount: json.results.length * json.pagination.numberOfPages,
        allPagesCount:json.pagination.numberOfPages
      })
    });
  }

  render() {
    const { isLoaded, movies } = this.state;
    const {allPagesCount} = this.state;

    // if ( this.state.allPagesCount=== 0) {
    //   return <div><WillPaginate /></div>
    //   console.log("no results");
    //   };



    if (!isLoaded) {
      return <div>Loading...</div>
      
    }
    else {

      return (

        <div className="search-page-container" >
          <SearchFilter titleInput={this.state.inputContent} onSearchFilter={this.handleOnSearchChange} updateInputValue={this.handleOnSearchChangeValue} />
          <div className="content" >
            <div className="filters-container">
              <Genre onFilterChange={this.handleGenreChange} selectedGenre={this.state.selectedGenre} />
              <Year onYearChange={this.handleYearChange} yearInput={this.state.inputYearContent} />
              <Language onLanguageChange={this.handleLanguageChange} selectedLanguage={this.state.selectedLanguage} />
              <Country onCountryChange={this.handleCountryChange} selectedCountry={this.state.selectedCountry} />
              <RuntimeFilter onRuntimeChange={this.handleRuntimeChange} runtimeValue={this.state.runtimeValue} updateRuntimeValue={this.handleRuntimeChangeValue} />
              <ImdbRatingFilter onImdbRatingChange={this.handleImdbRatingChange} imdbRatingValue={this.state.imdbRatingValue} updateImdbRatingValue={this.handleImdbRantingChangeValue} />
              <button className='button-reset-all-filters' onClick={this.resetAllFilters}>Reset all filters</button>
            </div>
            <div className="moviePaginationContainer">
            <div className="all-movies-container">
            <div className="noResults">
              {this.state.allPagesCount === 0 ? <p>No Search Results</p> : null }
            </div>
              {
                movies.map((movie, index) =>
                  <MovieBox movie_details={movie} movie_index={index} key={movie._id}/>
                )}
            </div>
            
            </div>
            

          </div>
          <div className = "paginationContainer row">
  
            <WillPaginate
            parentFetch={this.updateDictionary}
            pageCount={this.state.pageCount} 
            currentPage={this.state.currentPage}
            totalItemsCount={this.state.totalItemsCount}
            inputContent={this.state.inputContent}
            newValue={this.state.newValue}
            allPagesCount={this.state.allPagesCount}

            ></WillPaginate>
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
