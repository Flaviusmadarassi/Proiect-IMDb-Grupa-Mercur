import React from "react";
import { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";

import Home from "./pages/HomePage/HomePage";
import Search from "./pages/SearchPage/SearchPage";
import Details from "./pages/MoviesDetailsPage/MovieDetailsPage";

import LogIn from "./components/LogIn/LogIn.js";

import Add from "./pages/EditPage/AddPage";
import Delete from "./pages/EditPage/DeletePage";
import EditMovie from "./pages/EditPage/EditMovie";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search-movie" exact component={Search} />
            <Route path="/movie-details" exact component={Details} />
            <Route path="/login-page" exact component={LogIn} />
            <Route path="/editation/add" exact component={Add} />
            <Route path="/editation/edit" exact component={EditMovie} />
            <Route path="/editation/delete" exact component={Delete} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
