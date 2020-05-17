import React, { Component } from 'react';
import './RuntimeFilter.css'
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import './ImdbRatingFilter.css'


export class ImdbRatingFilter extends Component {

    handleOnChange = (value) => {
        this.props.updateImdbRatingValue(value);
    }
    render() {

        const { imdbRatingValue } = this.props;

        return (
            <div className="rating-container" onMouseUp={() => { this.props.onImdbRatingChange(imdbRatingValue) }}>
                <p>Rating</p>
                <RangeSlider
                    value={imdbRatingValue}
                    onChange={changeEvent => this.handleOnChange(changeEvent.target.value)}
                    max={10}
                    step={0.1}
                    variant='danger'

                />
            </div>
        );
    }
};

