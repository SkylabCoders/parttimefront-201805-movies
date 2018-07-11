import React, { Component } from 'react';
import DataService from '../../services/DataService';
import { Link } from 'react-router-dom';


class MoviesByGenre extends Component {
  constructor(props){
    super(props);
    this.state = {
      movie: [
        
      ]
    }
  }

  
  componentDidMount(){
    DataService.getMoviesByGenre(this.props.match.params.genre_ids).then((data) => {
      console.log('data: ', data);

    }, (error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <div className="movies-by-genre">
        <Link to="/discover-movies" >Go to Movie list</Link>
        
        {
         this.props.match.params.results ? 
         this.props.match.params.results.map((e)=>{
          return <div>< Link to= {`movie-item/${e.props.match.params.id}`} key={e.props.match.params.id} > 
           <p>{this.props.match.params.title}</p> 
          <p>{this.props.match.params.overview}</p>    
               
          {
        //        <img className='image' src={`https://image.tmdb.org/t/p/w92/${this.props.match.params.poster_path}`} />
        }

          </Link></div> }) :   
          'Loading'   
        }
        
        
      </div>
    );
  }
}

export default MoviesByGenre;
