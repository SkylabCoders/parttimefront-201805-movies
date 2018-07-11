import React, { Component } from 'react';
import DataService from '../../services/DataService';

class TvByGenre extends Component {
  constructor(props){
    super(props);
  }

  /*componentDidMount(){
    DataService.discoverMovies(1).then((data) => {
      console.log('data: ', data);

    }, (error) => {
      console.log(error);
    })
  }*/

  render() {
    return (
      <div className="tv-by-genre">
        
        
      </div>
    );
  }
}

export default TvByGenre;
