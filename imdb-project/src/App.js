import React from "react";
import "./App.css";
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import  Home  from './pages/HomePage/HomePage';
import  Search  from './pages/SearchPage/SearchPage';
import  Details from './pages/MoviesDetailsPage/MovieDetailsPage';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <h2>MY IMDB</h2>
          <nav className="navbar">
          <div className="navbar-bar-list">
            <p><Link to={'/'} className="nav-link"> Home </Link></p>
            <p><Link to={'/search-movie'} className="nav-link">Search Movie</Link></p>
            <p><Link to={'/movie-details'} className="nav-link">Movie details</Link></p>
          </div>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/search-movie' component={Search} />
              <Route path='/movie-details' component={Details} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
