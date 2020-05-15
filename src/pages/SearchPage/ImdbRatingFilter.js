import React, { Component } from "react";
// import "./RuntimeFilter.css";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
// import './ImdbRatingFilter.css'

export class ImdbRatingFilter extends Component {
  state = {
    value: 0,
  };
  handleOnChange = (value) => {
    this.setState({ value });
  };
  render() {
    return (
      <div
        className="rating-container"
        onMouseUp={() => {
          this.props.onImdbRatingChange(this.state.value);
        }}
      >
        <p>Rating</p>
        <RangeSlider
          value={this.state.value}
          onChange={(changeEvent) =>
            this.handleOnChange(changeEvent.target.value)
          }
          max={10}
          step={0.1}
          variant="danger"
        />
      </div>
    );
  }
}
