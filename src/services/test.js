import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import functionsTest from 'DataService';

class Test extends Component {

  
    render() {
      return (
        <Router>
          <div className="movies-explorer">
            <functionsTest/>
          </div>
        </Router>
      );
    }
  }
  
  export default Test;
  
