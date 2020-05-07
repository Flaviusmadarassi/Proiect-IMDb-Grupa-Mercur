import React, { Component } from 'react';
import { MDBBtn } from "mdbreact";
import { createMovieDelete } from './MovieFetchDelete';
import './DeleteForm.css';

class DeleteForm extends Component {
    state = {

    };
    refreshPage = () => {
        window.location.reload(false);

    }
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
                <div className='container-poster-delete-page'><img src={this.props.searchedMovieResult['Poster']}></img></div>
                <form
                    className="needs-validation"
                    onSubmit={this.submitHandler}
                    noValidate
                >
                    <div className="add-button-container">
                        <MDBBtn color="success" type="submit" onClick={this.handleDeleteOnClick} >
                            Delete movie
                    </MDBBtn>
                    </div>
                </form>
            </div>
        )
    }

}

export default DeleteForm;