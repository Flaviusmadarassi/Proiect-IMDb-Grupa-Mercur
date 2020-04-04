import React, { Component } from 'react';
import "./SearchPage.css";


class Search extends Component {
  render() {
    return (
        <div className="searchPage">
          <div className="searchContainer">
            <h3>Search by:</h3>
            <div className="inputContainer">
              <input className="input" type="text" placeholder="Name"/>
              <input className="input" type="text"placeholder="Year"/>
              <input className="input" type="text"placeholder="Genre"/>
              <input className="input" type="text"placeholder="Language"/>
              <input className="input" type="text"placeholder="Country"/>
              <input className="input" type="text"placeholder="Run Time"/>
            </div>
          </div>
          <div className="allMoviesContainer">
            <h2>ALL MOOVIES</h2>
          </div>
        </div>
    );
  }
}

export default Search;