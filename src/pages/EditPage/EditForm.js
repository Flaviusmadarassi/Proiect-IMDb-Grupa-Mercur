import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import "./AddPage.css";

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
    };

    // onChange(e) {
    //     this.setState({ [e.target.name]: e.target.value })
    // }

    render() {


        return (

            <div >
                <form
                    className="needs-validation"
                    onSubmit={this.submitHandler}
                    noValidate
                >
                    <div className='container-row'>
                        <MDBRow>
                            <MDBCol md="4" >
                                <label
                                    htmlFor="defaultFormRegistertitle"
                                    className="grey-text"
                                >
                                    Movie title :
                            </label>
                                <input
                                    defaultValue={this.state.Title}
                                    name="Title"
                                    onChange={(value) => {
                                        this.setState({ Title: value });
                                        console.log(this.state)
                                    }}
                                    type="text"
                                    id="defaultFormRegistertitle"
                                    className="form-control"
                                    placeholder="Movie title"
                                    required
                                />
                                <div class="invalid-feedback">Please fill out this field.</div>
                            </MDBCol>
                        </MDBRow>
                    </div>
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
                                    defaultValue={this.state.Genre}
                                    name="Genre"
                                    onChange={this.changeHandler}
                                    type="text"
                                    id="defaultFormRegistergenre"
                                    className="form-control"
                                    placeholder="Genre"
                                    required
                                />
                                <div class="invalid-feedback">Please fill out this field.</div>
                            </MDBCol>
                            <MDBCol md="4">
                                <label
                                    htmlFor="defaultFormRegisteryear"
                                    className="grey-text"
                                >
                                    Year :
                            </label>
                                <input
                                    defaultValue={this.state.Year}
                                    name="Year"
                                    onChange={this.changeHandler}
                                    type="number"
                                    id="defaultFormRegisterYear"
                                    className="form-control"
                                    placeholder="Year"
                                    required
                                />
                                <div class="invalid-feedback">Please fill out this field.</div>
                            </MDBCol>
                            <MDBCol md="4">
                                <label
                                    htmlFor="defaultFormRegistercountry"
                                    className="grey-text"
                                >
                                    Country :
                            </label>
                                <input
                                    defaultValue={this.state.Country}
                                    name="Country"
                                    onChange={this.changeHandler}
                                    type="text"
                                    id="defaultFormRegisterCountry"
                                    className="form-control"
                                    placeholder="Country"
                                    required
                                />
                                <div class="invalid-feedback">Please fill out this field.</div>
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
                                    defaultValue={this.state.Poster}
                                    name="Poster"
                                    onChange={this.changeHandler}
                                    type="text"
                                    id="defaultFormRegisterPoster"
                                    className="form-control"
                                    placeholder="Poster URL"
                                    required
                                />
                                <div class="invalid-feedback">Please fill out this field.</div>
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
                                    defaultValue={this.state.Language}
                                    name="Language"
                                    onChange={this.changeHandler}
                                    type="text"
                                    id="defaultFormRegisterLanguage"
                                    className="form-control"
                                    placeholder="Language"
                                    required
                                />
                                <div class="invalid-feedback">Please fill out this field.</div>
                            </MDBCol>
                            <MDBCol md="3">
                                <label
                                    htmlFor="defaultFormRegisterRuntime"
                                    className="grey-text"
                                >
                                    Runtime :
                            </label>
                                <input
                                    defaultValue={this.state.Runtime}
                                    name="Runtime"
                                    onChange={this.changeHandler}
                                    type="text"
                                    id="defaultFormRegisterRuntime"
                                    className="form-control"
                                    placeholder="Runtime"
                                    required
                                />
                                <div class="invalid-feedback">Please fill out this field.</div>
                            </MDBCol>
                            <MDBCol md="3">
                                <label
                                    htmlFor="defaultFormRegisterImdbVotes"
                                    className="grey-text"
                                >
                                    Imdb Votes :
                            </label>
                                <input
                                    defaultValue={this.state.imdbVotes}
                                    name="ImdbVotes"
                                    onChange={this.changeHandler}
                                    type="text"
                                    id="defaultFormRegisterImdbVotes"
                                    className="form-control"
                                    placeholder="Imdb Votes"
                                    required
                                />
                                <div class="invalid-feedback">Please fill out this field.</div>
                            </MDBCol>
                            <MDBCol md="3">
                                <label
                                    htmlFor="defaultFormRegisterImdbRating"
                                    className="grey-text"
                                >
                                    Imdb Rating :
                            </label>
                                <input
                                    defaultValue={this.state.imdbRating}
                                    name="ImdbRating"
                                    onChange={this.changeHandler}
                                    type="number"
                                    id="defaultFormRegisterImdbRating"
                                    className="form-control"
                                    placeholder="Imdb Rating"
                                    required
                                />
                                <div class="invalid-feedback">Please fill out this field.</div>
                            </MDBCol>
                        </MDBRow>
                    </div>
                    <div className="add-button-container">
                        <MDBBtn color="success" type="submit" >
                            Edit movie
                    </MDBBtn>
                    </div>
                </form>
            </div >
        );
    }
}


export default EditForm;