import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './index.css';

class AppHeader extends Component {
  render() {
    return (
      <header className="app-header">
        <p>PARTIMERS <br/>MOVIE & TV</p>
        <nav>
            <div>
              <p><Link to="/App">Home</Link></p>
            </div>
            <div>
              <p><Link to="/Movies">Movies</Link></p>
            </div>
            <div>
              <p><Link to="/TVShoe">TV Shows</Link></p>
            </div>
        </nav>
      </header>
    );
  }
}

export default AppHeader;
