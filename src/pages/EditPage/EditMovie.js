import React, { Component } from 'react'
import ReactSearchBox from 'react-search-box'
import { fetchMovies } from "../SearchPage/FetchMovies";
import './EditMovie.css';
import EditForm from './EditForm';
import Footer from '../../components/Footer';

export default class EditMovie extends Component {
    state = {
        data: [],
        searchedMovieDictionary: {},
        showForm: false,
    }

    _onSelect = () => {
        this.setState({
            showForm: true,
        });

    }

    returnedMovieObject = () => {

        for (let movie of this.state.data) {

            if (movie['value'] === this.state.searchedMovieDictionary.value) {

                return movie.allInfo;
            }
        }
    }

    componentDidMount() {
        console.log("mounted");

        fetchMovies(`https://movies-app-siit.herokuapp.com/movies?take=100000`).then((json) => {
            console.log(json);

            let serverData = [];
            json.results.map((movie, index) => serverData.push({ key: index, value: movie.Title, allInfo: movie }))
            console.log(serverData);

            this.setState({
                data: serverData,
            })
        });
    }

    render() {
        const { data } = this.state;
        return (
            <div className="allPage">
                <div className="container-edit-page" >
                    <div className="search-movie-input-container">
                        <ReactSearchBox
                            placeholder="Search for a movie"
                            data={data}
                            onSelect={record => {
                                this.setState({ searchedMovieDictionary: record })
                                this._onSelect()
                            }
                            }
                            fuseConfigs={{
                                threshold: 0.05,
                            }}
                        />

                    </div>
                    {this.state.showForm ? <EditForm searchedMovieResult={this.returnedMovieObject()} /> : null}

                </div>
                <div><Footer /></div>
            </div>

        )
    }
}