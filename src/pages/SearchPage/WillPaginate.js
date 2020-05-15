import React, { Component } from "react";

import Pagination from "react-js-pagination";
import "./willPaginate.css"

import "bootstrap/dist/css/bootstrap.min.css";

export default class WillPaginate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: this.props.currentPage
      
    };
  }

  componentWillReceiveProps({ currentPage }) {
    this.setState({ ...this.state, currentPage })
  }

  handlePageChange(pageNumber) {
    this.setState({ currentPage: pageNumber})
    this.props.parentFetch(this.props.inputContent, this.props.newValue, pageNumber === 1 ? 0 : (pageNumber * 10 - 10));
  }

  render() {
    
    return (
      <div>
        
        <Pagination 
          allPagesCount={this.state.allPagesCount}
          activePage={this.state.currentPage}
          totalItemsCount={this.props.totalItemsCount}
          onChange={this.handlePageChange.bind(this)}
        />
      </div>
    );
  }
}

