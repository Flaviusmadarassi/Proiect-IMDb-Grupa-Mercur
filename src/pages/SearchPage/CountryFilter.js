import React, { Component } from 'react';
import Select from 'react-select';
import "./CountryFilter.css"


const options = [
    { value: 'Canada', label: 'Canada' },
    // { value: 'Philippines', label: 'Philippines' },
    { value: 'Romania', label: 'Romania' },
    { value: 'UK', label: 'UK' },
    { value: 'USA', label: 'USA' },
    { value: 'Germany', label: 'Germany' },
    // { value: 'Japan', label: 'Japan' },

    // { value: 'South Korea', label: 'South Korea' },

    // { value: 'Denmark', label: 'Denmark' },

];
const customStyles = {
    option: (provided, state) => ({
        ...provided,
        borderBottom: '1px dotted black',
        // color: state.isSelected ? 'red' : 'blue',
        padding: 20,
        height: 10,
    }),
    input: styles => ({
        ...styles,
    }),
}

class Country extends Component {


    handleChange = (selectedCountry) => {

        this.props.onCountryChange(selectedCountry);
    }


    render() {

        const { selectedCountry } = this.props;

        return (
            <div className="country-container">
                <Select
                    value={selectedCountry}
                    placeholder="Select a country"
                    onChange={this.handleChange}
                    options={options}
                    styles={customStyles}
                />
            </div>
        );

    }
}

export default Country;