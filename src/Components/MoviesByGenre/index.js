import React, { Component } from 'react';
import DataService from '../../services/DataService';

class MoviesByGenre extends Component {
  constructor(props){
    super(props);
  }

  /*
  componentDidMount(){
    DataService.moviesByGenre(1).then((data) => {
      console.log('data: ', data);

    }, (error) => {
      console.log(error);
    })
  }*/

  render() {
    return (
      <div className="movies-by-genre">
        
        
      </div>
    );
  }
}

export default MoviesByGenre;
