import React, { Component } from 'react';
import Select from 'react-select';
import './GenreFilter.css'


const options = [
  { value: 'adventure', label: 'Adventure' },
  { value: 'action', label: 'Action' },
  { value: 'animation', label: 'Animation' },
  { value: 'comedy', label: 'Comedy' },
  { value: 'crime', label: 'Crime' },
  { value: 'drama', label: 'Drama' },
  { value: 'family', label: 'Family' },
  { value: 'fantasy', label: 'Fantasy' },
  { value: 'horror', label: 'Horror' },
  { value: 'romance', label: 'Romance' },
  { value: 'sci-fi', label: 'Sci-Fi' },
  { value: 'thriller', label: 'Thriller' },
  { value: 'western', label: 'Western' }
];
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted blue',
    color: state.isSelected ? 'red' : 'blue',
    padding: 20,
    height: 10,
  }),
  input: styles => ({
    ...styles,
  }),
}

class Genre extends Component {
  state = {
    selectedGenre: null,
  };

  handleChange = (selectedGenre) => {
    this.setState({ selectedGenre });
    this.props.onFilterChange(selectedGenre);
  }


  render() {

    const { selectedGenre } = this.state;

    return (
      <div className="genre-container">
        <Select
          value={selectedGenre}
          placeholder="Select a genre"
          onChange={this.handleChange}
          options={options}
          styles={customStyles}
        />
      </div>
    );

  }
}

export default Genre;