import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import DiscoverMovies from '../DiscoverMovies';
import AppHeader from '../../Commons/AppHeader';
import MoviesByGenre from '../MoviesByGenre';
import TvByGenre from '../TvByGenre';


class App extends Component {

  
  render() {
    return (
      <Router>
        <div className="movies-explorer">
          <AppHeader/>
          <Switch>
            <Route path='/discover-movies' exact component={DiscoverMovies}/>
            <Route path='/movies-by-genre/:genre' exact component={MoviesByGenre}/>
            <Route path='/tv-by-genre/:genre' exact component={TvByGenre}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
