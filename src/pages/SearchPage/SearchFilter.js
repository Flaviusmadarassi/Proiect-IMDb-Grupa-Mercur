import React, { Component } from 'react';
import './SearchFilter.css';


class SearchFilter extends Component {

    handleOnChange = (event) => {
        this.props.updateInputValue(event.target.value)
    }

    handleOnEnther = (event) => {
        if (event.key === 'Enter') {
            this.props.onSearchFilter(this.props.titleInput);

        }
    }
    handleOnclick = () => {
        this.props.onSearchFilter(this.props.titleInput);
    }
    render() {

        return (

            <div className="input-container">
                <input className="search-input" type="text" value={this.props.titleInput} placeholder="Enter a movie title" onChange={this.handleOnChange} onKeyDown={this.handleOnEnther}></input>
                <i className="fa fa-search search-icon" aria-hidden="true" onClick={this.handleOnclick}></i>
            </div>
        );

    }
}

export default SearchFilter;