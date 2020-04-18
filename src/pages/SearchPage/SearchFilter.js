import React, { Component } from 'react';
import './SearchFilter.css';


class SearchFilter extends Component {


    render() {

        return (

            <div className="input-container">
                <input className="search-input" type="text" value={this.props.searchInput} placeholder="Enter a movie title" onChange={this.props.onSearchFilter}></input>
                <i className="fa fa-search search-icon" aria-hidden="true"></i>
            </div>
        );

    }
}

export default SearchFilter;