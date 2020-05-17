import React, { Component } from 'react';
import './RuntimeFilter.css'
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';


export class RuntimeFilter extends Component {

    handleOnChange = (value) => {
        this.props.updateRuntimeValue(value);
    }
    render() {
        const { runtimeValue } = this.props;

        return (
            <div className="runtime-container" onMouseUp={() => { this.props.onRuntimeChange(runtimeValue) }}>
                <p>Movie runtime</p>
                <RangeSlider
                    value={runtimeValue}
                    onChange={changeEvent => this.handleOnChange(changeEvent.target.value)}
                    max={300}
                    variant='danger'

                />
            </div>
        );
    }
};


