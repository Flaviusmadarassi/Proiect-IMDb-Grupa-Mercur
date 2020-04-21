import React from "react";
import { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/HomePage/HomePage";
import Search from "./pages/SearchPage/SearchPage";
import Details from "./pages/MoviesDetailsPage/MovieDetailsPage";

import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./components/Header";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search-movie" exact component={Search} />
            <Route path="/movie-details" exact component={Details} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
