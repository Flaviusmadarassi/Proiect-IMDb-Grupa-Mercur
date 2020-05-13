import React, { Component } from 'react';
import { MDBBtn } from "mdbreact";
import { createMovieDelete } from './MovieFetchDelete';
import './DeleteForm.css';

class DeleteForm extends Component {
    state = {

    };

    handleDeleteOnClick = () => {
        const token = document.cookie
            .split(";")
            .find((element) => {
                if (element.includes("token"))
                    return true;
            })
            .split("=")[1];

        console.log(this.props.searchedMovieResult['_id']);
        return createMovieDelete(this.props.searchedMovieResult['_id'], token);
    }
    render() {
        return (
            <div>
                <div className='container-poster-delete-page'><img alt='poster' src={this.props.searchedMovieResult['Poster']}></img></div>
                <form
                    className="needs-validation"
                    onSubmit={this.submitHandler}
                    noValidate
                >
                    <div className="delete-button-container">
                        <MDBBtn color="success" type="submit" className='btn btn-light' onClick={this.handleDeleteOnClick} >
                            Delete movie
                    </MDBBtn>
                    </div>
                </form>
            </div>
        )
    }

}

export default DeleteForm;