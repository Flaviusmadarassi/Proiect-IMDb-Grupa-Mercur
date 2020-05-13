import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import "./EditForm.css";
import { createMovieUpdate } from './MovieFetchUpdate';

class EditForm extends Component {

    state = {
        Title: this.props.searchedMovieResult.Title,
        Country: this.props.searchedMovieResult.Country,
        Year: this.props.searchedMovieResult.Year,
        Genre: this.props.searchedMovieResult.Genre,
        Language: this.props.searchedMovieResult.Language,
        Runtime: this.props.searchedMovieResult.Runtime,
        imdbVotes: this.props.searchedMovieResult.imdbVotes,
        imdbRating: this.props.searchedMovieResult.imdbRating,
        Poster: this.props.searchedMovieResult.Poster,
        imdbID: this.props.searchedMovieResult.imdbID,
        Type: this.props.searchedMovieResult.Type,
        selectedMovie: this.props.searchedMovieResult,
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleFetchOnClick = () => {
        const token = document.cookie
            .split(";")
            .find((element) => {
                if (element.includes("token"))
                    return true;
            })
            .split("=")[1];
        const data = {
            Title: this.state.Title,
            Country: this.state.Country,
            Year: this.state.Year,
            Genre: this.state.Genre,
            Language: this.state.Language,
            Runtime: this.state.Runtime,
            imdbVotes: this.state.imdbVotes,
            imdbRating: this.state.imdbRating,
            Poster: this.state.Poster,
            imdbID: this.state.imdbID,
            Type: this.state.Type,
        };
        console.log(this.state);
        console.log(this.props.searchedMovieResult._id);
        createMovieUpdate(this.props.searchedMovieResult._id, data, token);


    }


    componentDidUpdate() {
        // If previous movie selected is different from actual movie selected then all inputs will be updated
        // and also the actual movie selected
        if (this.state.selectedMovie !== this.props.searchedMovieResult) {

            this.setState({
                Title: this.props.searchedMovieResult.Title,
                Country: this.props.searchedMovieResult.Country,
                Year: this.props.searchedMovieResult.Year,
                Genre: this.props.searchedMovieResult.Genre,
                Language: this.props.searchedMovieResult.Language,
                Runtime: this.props.searchedMovieResult.Runtime,
                imdbVotes: this.props.searchedMovieResult.imdbVotes,
                imdbRating: this.props.searchedMovieResult.imdbRating,
                Poster: this.props.searchedMovieResult.Poster,
                imdbID: this.props.searchedMovieResult.imdbID,
                Type: this.props.searchedMovieResult.Type,
                selectedMovie: this.props.searchedMovieResult,
            })
        }
    }

    render() {

        return (

            <div >
                <form
                    className="needs-validation"
                    onSubmit={this.submitHandler}
                    noValidate
                >

                    <MDBRow className='title-col-container'>

                        <MDBCol md="4" >
                            <label
                                htmlFor="defaultFormRegistertitle"
                                className="grey-text"
                            >
                                Movie title :
                            </label>
                            <input
                                value={this.state.Title}
                                name="Title"
                                onChange={this.onChange}
                                type="text"
                                id="defaultFormRegistertitle"
                                className="form-control"
                                placeholder="Movie title"
                                required
                            />
                            <div className="invalid-feedback">Please fill out this field.</div>

                        </MDBCol>
                        <MDBCol md="4" >
                            <label
                                htmlFor="defaultFormRegisterImdbID"
                                className="grey-text"
                            >
                                Imdb ID :
                            </label>
                            <input
                                value={this.state.imdbID}
                                name="imdbID"
                                onChange={this.onChange}
                                type="text"
                                id="defaultFormRegisterImdbID"
                                className="form-control"
                                placeholder="Imdb ID"
                                required
                            />
                            <div className="invalid-feedback">Please fill out this field.</div>

                        </MDBCol>

                        <MDBCol>
                            <img alt='poster' src={this.state.Poster} ></img>
                        </MDBCol>

                    </MDBRow>



                    <div className='container-row'>
                        <MDBRow>
                            <MDBCol md="4">
                                <label
                                    htmlFor="defaultFormRegistergenre"
                                    className="grey-text"
                                >
                                    Genre :
                            </label>
                                <input
                                    value={this.state.Genre}
                                    name="Genre"
                                    onChange={this.onChange}
                                    type="text"
                                    id="defaultFormRegistergenre"
                                    className="form-control"
                                    placeholder="Genre"
                                    required
                                />
                                <div className="invalid-feedback">Please fill out this field.</div>
                            </MDBCol>
                            <MDBCol md="4">
                                <label
                                    htmlFor="defaultFormRegisteryear"
                                    className="grey-text"
                                >
                                    Year :
                            </label>
                                <input
                                    value={this.state.Year}
                                    name="Year"
                                    onChange={this.onChange}
                                    type="number"
                                    id="defaultFormRegisterYear"
                                    className="form-control"
                                    placeholder="Year"
                                    required
                                />
                                <div className="invalid-feedback">Please fill out this field.</div>
                            </MDBCol>
                            <MDBCol md="4">
                                <label
                                    htmlFor="defaultFormRegistercountry"
                                    className="grey-text"
                                >
                                    Country :
                            </label>
                                <input
                                    value={this.state.Country}
                                    name="Country"
                                    onChange={this.onChange}
                                    type="text"
                                    id="defaultFormRegisterCountry"
                                    className="form-control"
                                    placeholder="Country"
                                    required
                                />
                                <div className="invalid-feedback">Please fill out this field.</div>
                            </MDBCol>

                        </MDBRow>
                    </div >
                    <div className='container-row'>
                        <MDBRow>
                            <MDBCol md="8">
                                <label
                                    htmlFor="defaultFormRegisterPoster"
                                    className="grey-text"
                                >
                                    Poster URL :
                            </label>
                                <input
                                    value={this.state.Poster}
                                    name="Poster"
                                    onChange={this.onChange}
                                    type="text"
                                    id="defaultFormRegisterPoster"
                                    className="form-control"
                                    placeholder="Poster URL"
                                    required
                                />
                                <div className="invalid-feedback">Please fill out this field.</div>
                            </MDBCol>
                            <MDBCol md="4">
                                <label
                                    htmlFor="defaultFormRegisterType"
                                    className="grey-text"
                                >
                                    Type :
                            </label>
                                <input
                                    value={this.state.Type}
                                    name="Type"
                                    onChange={this.onChange}
                                    type="text"
                                    id="defaultFormRegisterType"
                                    className="form-control"
                                    placeholder="Type"
                                    required
                                />
                                <div className="invalid-feedback">Please fill out this field.</div>
                            </MDBCol>
                        </MDBRow>
                    </div>
                    <div className='container-row'>
                        <MDBRow>
                            <MDBCol md="3">
                                <label
                                    htmlFor="defaultFormRegisterLanguage"
                                    className="grey-text"
                                >
                                    Language :
                            </label>
                                <input
                                    value={this.state.Language}
                                    name="Language"
                                    onChange={this.onChange}
                                    type="text"
                                    id="defaultFormRegisterLanguage"
                                    className="form-control"
                                    placeholder="Language"
                                    required
                                />
                                <div className="invalid-feedback">Please fill out this field.</div>
                            </MDBCol>
                            <MDBCol md="3">
                                <label
                                    htmlFor="defaultFormRegisterRuntime"
                                    className="grey-text"
                                >
                                    Runtime :
                            </label>
                                <input
                                    value={this.state.Runtime}
                                    name="Runtime"
                                    onChange={this.onChange}
                                    type="text"
                                    id="defaultFormRegisterRuntime"
                                    className="form-control"
                                    placeholder="Runtime"
                                    required
                                />
                                <div className="invalid-feedback">Please fill out this field.</div>
                            </MDBCol>
                            <MDBCol md="3">
                                <label
                                    htmlFor="defaultFormRegisterImdbVotes"
                                    className="grey-text"
                                >
                                    Imdb Votes :
                            </label>
                                <input
                                    value={this.state.imdbVotes}
                                    name="imdbVotes"
                                    onChange={this.onChange}
                                    type="text"
                                    id="defaultFormRegisterImdbVotes"
                                    className="form-control"
                                    placeholder="Imdb Votes"
                                    required
                                />
                                <div className="invalid-feedback">Please fill out this field.</div>
                            </MDBCol>
                            <MDBCol md="3">
                                <label
                                    htmlFor="defaultFormRegisterImdbRating"
                                    className="grey-text"
                                >
                                    Imdb Rating :
                            </label>
                                <input
                                    value={this.state.imdbRating}
                                    name="imdbRating"
                                    onChange={this.onChange}
                                    type="number"
                                    id="defaultFormRegisterImdbRating"
                                    className="form-control"
                                    placeholder="Imdb Rating"
                                    required
                                />
                                <div className="invalid-feedback">Please fill out this field.</div>
                            </MDBCol>
                        </MDBRow>
                    </div>
                    <div className="edit-button-container">
                        <MDBBtn color="success" type="submit" className='btn btn-light' onClick={this.handleFetchOnClick} >
                            Edit movie
                    </MDBBtn>
                    </div>
                </form>
            </div >
        );
    }
}


export default EditForm;