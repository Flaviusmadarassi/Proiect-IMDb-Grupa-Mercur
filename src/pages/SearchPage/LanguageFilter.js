import React, { Component } from 'react';
import Select from 'react-select';
import "./LanguageFilter.css"


const options = [
    { value: 'English', label: 'English' },
    // { value: 'Mandarin', label: 'Mandarin' },
    { value: 'French', label: 'French' },
    { value: 'Spanish', label: 'Spanish' },
    { value: 'Japanese', label: 'Japanese' },
    // { value: 'Portuguese', label: 'Portuguese' },
    // { value: 'Thai', label: 'Thai' },
    // { value: 'Esperanto', label: 'Esperanto' },
    { value: 'German', label: 'German' },
    { value: 'Italian', label: 'Italian' },
    { value: 'Romanian', label: 'Romanian' },
    // { value: 'Filipino', label: 'Filipino' },
    // { value: 'Tagalog', label: 'Tagalog' }
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

class Language extends Component {


    handleChange = (selectedLanguage) => {

        this.props.onLanguageChange(selectedLanguage);
    }


    render() {

        const { selectedLanguage } = this.props;

        return (
            <div className="language-container">
                <Select
                    value={selectedLanguage}
                    placeholder="Select a language"
                    onChange={this.handleChange}
                    options={options}
                    styles={customStyles}
                />
            </div>
        );

    }
}

export default Language;