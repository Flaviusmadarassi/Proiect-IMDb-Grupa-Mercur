import React, { Component } from 'react';
import './YearFilter.css'

class Year extends Component {


    render() {

        return (

            <div className="year-container">
                <input className="input-year" value={this.props.yearInput} placeholder="Enter a year" onChange={this.props.onYearChange}></input>
            </div >
        );

    }
}

export default Year;