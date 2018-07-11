import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Generic extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies: [
        
      ],
      tv: [

      ]
    }

  }



  render() {
    return (
     
        <div className="generic-container" >
        <p>this is generic list</p>
        
        
        {
            this.state.movies.results ?
        this.state.movies.results.map((e)=>{
         
          return <div>< Link to= {`movie-item/${e.id}`} > 
                            {e.title}
                            <img className='image' src={`https://image.tmdb.org/t/p/w92/${e.poster_path}`} />
                            {e.overview}
                      </Link></div> })  :
                      'Loading'
        }

         {
            this.state.tv.results ?
        this.state.tv.results.map((e)=>{
         
          return <div>< Link to= {`tv-item/${e.id}`} > 
                            {e.title}
                            <img className='image' src={`https://image.tmdb.org/t/p/w92/${e.poster_path}`} />
                            {e.overview}      
                      </Link></div> })  :
                      'Loading'
        }
          
        </div>

        

        
    
    );
  }
}

export default Generic;
