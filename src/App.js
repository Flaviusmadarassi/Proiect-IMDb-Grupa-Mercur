import React from "react";
import "./App.css";
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import  Home  from './pages/HomePage/HomePage';
import  Search  from './pages/SearchPage/SearchPage';
import  Details from './pages/MoviesDetailsPage/MovieDetailsPage';
import Logo from "./logo-img.PNG"
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
    <Router>
        <div className="generalContainer">
          <div className="header">
          {/* <h2 className="name">MY IMDB</h2> */}
          <img className= "logo" src={Logo} alt="logoImg"/>
          <nav className="navbar">
          <div className="navbar-bar-list">
            <button><Link to={'/'} className="nav-link"> Home </Link></button>
            <button><Link to={'/search-movie'} className="nav-link">Search Movie</Link></button>
            <button><Link to={'/movie-details'} className="nav-link">Movie details</Link></button>
          </div>
          </nav>
          
          </div>
          
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
