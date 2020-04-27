import React, { Component } from 'react';
import './SearchFilter.css';


class SearchFilter extends Component {
    state = {
        value: ''
    }
    handleOnChange = (event) => {
        this.setState({ value: event.target.value });
        console.log(event);


    }

    handleOnEnther = (event) => {
        if (event.key === 'Enter') {
            this.props.onSearchFilter(this.state.value);

        }
    }
    handleOnclick = () => {
        this.props.onSearchFilter(this.state.value);
    }
    render() {

        return (

            <div className="input-container">
                <input className="search-input" type="text" value={this.state.value} placeholder="Enter a movie title" onChange={this.handleOnChange} onKeyDown={this.handleOnEnther}></input>
                <i className="fa fa-search search-icon" aria-hidden="true" onClick={this.handleOnclick}></i>
            </div>
        );

    }
}

export default SearchFilter;