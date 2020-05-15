import React, { Component } from "react";
// import './RuntimeFilter.css'
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";

export class RuntimeFilter extends Component {
  state = {
    value: 0,
  };
  handleOnChange = (value) => {
    this.setState({ value });
  };
  render() {
    return (
      <div
        className="runtime-container"
        onMouseUp={() => {
          this.props.onRuntimeChange(this.state.value);
        }}
      >
        <p>Movie runtime</p>
        <RangeSlider
          value={this.state.value}
          onChange={(changeEvent) =>
            this.handleOnChange(changeEvent.target.value)
          }
          max={300}
          variant="danger"
        />
      </div>
    );
  }
}
