import React, { Component } from 'react';
import SearchInput from './SearchInputDeletePage';
import { fetchMovies } from "../SearchPage/FetchMovies";
import MovieBox from '../SearchPage/MovieBox.js';
import '../SearchPage/SearchPage.css';
import "./DeletePage.css";


class Delete extends Component {
    state = {
        movies: [],
        inputContainer: '',
        isLoaded: false,
    }


    // componentDidMount() {
    //     console.log("mounted");

    //     fetchMovies().then((json) => {
    //         console.log(json);


    //         this.setState({
    //             isLoaded: true,
    //             movies: json.results,

    //         })
    //     });
    // }

    handleOnSearchChange = (inputValue) => {

        this.setState({ inputContainer: inputValue });
        const all_movies = "https://movies-app-siit.herokuapp.com/movies";
        let searched_movie = all_movies + `?Title=^${inputValue}`; // returns the first 10 movies whose Title contains searched movie
        console.log(searched_movie);

        fetchMovies(searched_movie).then(json => {
            console.log('Results after search', json.results);
            console.log(json.results.Title);

            this.setState({
                movie: json.results,
            })


        })
    }

    render() {
        const { movies } = this.state;


        return (
            <div className="container" >
                <div className="search-page-container" >
                    <SearchInput onSearchInput={this.handleOnSearchChange} />
                    <div className='all-movies-container'>
                        {
                            movies.map((movie, index) =>
                                <MovieBox movie_details={movie} movie_index={index} key={movie._id} />
                            )}

                    </div>
                    <div className="delete-button-container">
                        <button className="delete-button">Delete movie</button>
                    </div>
                </div>
            </div >
        )
    }
}


export default Delete;