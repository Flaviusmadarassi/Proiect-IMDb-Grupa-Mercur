import React, { Component } from 'react';
import "./SearchInputDeletePage.css";



class SearchInput extends Component {
    state = {
        value: ''
    }
    handleOnChange = (event) => {
        this.setState({ value: event.target.value });



    }

    handleOnEnter = (event) => {
        if (event.key === 'Enter') {
            this.props.onSearchInput(this.state.value);

        }
    }
    handleOnclick = () => {
        this.props.onSearchInput(this.state.value);
    }
    render() {

        return (

            <div className="input-container-2">
                <input className="search-input-2" type="text" value={this.state.value} placeholder="Enter a movie title" onChange={this.handleOnChange} onKeyDown={this.handleOnEnter}></input>
                <i className="fa fa-search search-icon-2" aria-hidden="true" onClick={this.handleOnclick}></i>
            </div>
        );

    }
}

export default SearchInput;