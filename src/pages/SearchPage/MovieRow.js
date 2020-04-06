import React, { Component } from 'react';
import './Container.css';

class MovieRow extends Component {
    render(){
        return <div className='content-container-movies' key={this.props.movie_details.id}>
                    <div className='content'>
                        <h4>{this.props.movie_details.Title}</h4>              
                        <img src={this.props.movie_details.Poster}></img>
                        <p>Year : {this.props.movie_details.Year}</p>
                        <p>Genre : {this.props.movie_details.Genre}</p>
                        <p>Country : {this.props.movie_details.Country}</p>
                        <p>{this.props.movie_details.imdbRating}</p>
                    </div>             
                   
        </div>
    }
}

export default MovieRow;