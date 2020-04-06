import React, { Component } from "react";

export class SearchPageUtils extends Component {
  state = {
    title: null,
  };

  componentDidMount() {
    console.log("fetch");
    fetch("https://movies-api-siit.herokuapp.com/movies")
      .then(this.parseResponse)
      .then(this.handlerResponse);

    console.log("after fetch");
  }

  parseResponse(response) {
    console.log(response);
    return response.json();
  }

  handlerResponse = (json) => {
    console.log(json);

    this.setState({ title: json.results[0].Title });
  };

  render() {
    return <p>Search page {this.state.title}</p>;
  }
}
