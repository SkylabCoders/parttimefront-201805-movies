import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const API_KEY = '9e6a1fad2a4e7bffcd16924128d1895f';
const DATA_LANGUAGE = 'en-US';

const discoverMovies = function(page){
    const moviesPromise = new Promise((resolve, reject) => {
        axios.get('https://api.themoviedb.org/3/discover/movie',{
            params:{
                api_key  : API_KEY,
                language : DATA_LANGUAGE,
                sort_by  : 'popularity.desc',
                page     : page,
    
            }
        }).then((res) => {
            resolve(res.data);
        }).catch((error) => {
            reject(error);
        })
    });

    return moviesPromise;
}

// Lo mismo que el de movies pero con series
const discoverSeries = function(page){
    const tvPromise = new Promise((resolve, reject) => {
        axios.get('https://api.themoviedb.org/3/discover/tv',{
            params:{
                api_key  : API_KEY,
                language : DATA_LANGUAGE,
                sort_by  : 'popularity.desc',
                page     : page,
    
            }
        }).then((res) => {
            resolve(res.data);
        }).catch((error) => {
            reject(error);
        })
    });

    return tvPromise;
}



// Obtiene una película por su id. Esta función se debe añadir al export (abajo del todo)
// Para que pueda ser llamada desde fuera del service

const getMoviesItem = function(id){
    const movieIDPromise = new Promise((resolve, reject) => {
        axios.get('https://api.themoviedb.org/3/discover/movie',{
            params:{
                api_key  : API_KEY,
                language : DATA_LANGUAGE,
                id       : id,
    
            }
        }).then((res) => {
            resolve(res.data);
        }).catch((error) => {
            reject(error);
        })
    });

    return movieIDPromise;

}

// Obtiene una serie por su id. Esta función se debe añadir al export (abajo del todo)
// Para que pueda ser llamada desde fuera del service

const getSerieItem = function(id){
    const tvIDPromise = new Promise((resolve, reject) => {
        axios.get('https://api.themoviedb.org/3/discover/tv',{
            params:{
                api_key  : API_KEY,
                language : DATA_LANGUAGE,
                id       : id,
    
            }
        }).then((res) => {
            resolve(res.data);
        }).catch((error) => {
            reject(error);
        })
    });

    return tvIDPromise;

}

// Obtiene las películas que tengan cierto género. Esta función se debe añadir al 
// export (abajo del todo) para que pueda ser llamada desde fuera del service
const getMoviesByGenre = function(genre){
    const movieByGenrePromise = new Promise((resolve, reject) => {
        axios.get('https://api.themoviedb.org/3/discover/movie',{
            params:{
                api_key  : API_KEY,
                language : DATA_LANGUAGE,
                sort_by  : 'popularity.desc',
                genre    : genre,
    
            }
        }).then((res) => {
            resolve(res.data);
        }).catch((error) => {
            reject(error);
        })
    });

    return movieByGenrePromise;

}

// Obtiene las series que tengan cierto género. Esta función se debe añadir al 
// export (abajo del todo) para que pueda ser llamada desde fuera del service
const getSeriesByGenre = function(genre){
    const tveByGenrePromise = new Promise((resolve, reject) => {
        axios.get('https://api.themoviedb.org/3/discover/tv',{
            params:{
                api_key  : API_KEY,
                language : DATA_LANGUAGE,
                sort_by  : 'popularity.desc',
                genre    : genre,
    
            }
        }).then((res) => {
            resolve(res.data);
        }).catch((error) => {
            reject(error);
        })
    });

    return tveByGenrePromise;
}

export default {
    discoverMovies,
    discoverSeries,
    getMoviesItem,
    getSerieItem,
    getMoviesByGenre,
    getSeriesByGenre,
};

class functionsTest {
  

    render(){
        return(

            <div className="tests">

                <div classNeame="discoverMovies">
                <p>Discover Movies</p>
                <li>{discoverMovies(2)}</li>
                </div>

                <div classNeame="discoverTv">
                <p>Discover TV</p>
                <li>{discoverSeries(1)}</li>
                </div>

                <div classNeame="iDMovies">
                <p>Movie Item</p>
                <p>{getMoviesItem(1)}</p>
                </div>

                <div classNeame="iDTv">
                <p>Serie Item</p>
                <p>{getSerieItem(1)}</p>
                </div>


                <div classNeame="genreMovies">
                <p>Genre Movie</p>
                <li>{getMoviesByGenre('ACTION')}</li>
                </div>

                <div classNeame="genreTv">
                <p>Genre TV</p>
                <li>{getSeriesByGenre('ACTION')}</li>
                </div>
            
            </div>



        )
    }


}

export {functionsTest}