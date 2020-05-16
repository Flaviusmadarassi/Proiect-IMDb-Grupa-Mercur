import React, { Component } from "react";

class HeaderSearch extends Component {
  state = {};
  render() {
    return (
      <div class="active-pink-3 active-pink-4 mb-4">
        <input
          class="form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
        ></input>
      </div>
    );
  }
}

export default HeaderSearch;
