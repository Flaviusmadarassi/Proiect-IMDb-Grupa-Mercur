import React, { Component } from "react";

import Pagination from "react-js-pagination";
import "./willPaginate.css"

import "bootstrap/dist/css/bootstrap.min.css";

export default class WillPaginate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: this.props.currentPage,
    };
  }

  handlePageChange(pageNumber) {
    this.setState({ currentPage: pageNumber })
    this.props.parentFetch(this.props.inputContent, pageNumber === 1 ? 0 : pageNumber);
  }

  render() {
    return (
      <div>
        <Pagination
          activePage={this.state.currentPage}
          totalItemsCount={this.props.totalItemsCount}
          onChange={this.handlePageChange.bind(this)}
        />
      </div>
    );
  }
}

