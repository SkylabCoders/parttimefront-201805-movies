import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import DiscoverMovies from '../DiscoverMovies';
import AppHeader from '../../Commons/AppHeader';


class App extends Component {

  
  render() {
    return (
      <Router>
        <div className="movies-explorer">
          <AppHeader/>
          <Switch>
            <Route path='/discover-movies' exact component={DiscoverMovies}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
