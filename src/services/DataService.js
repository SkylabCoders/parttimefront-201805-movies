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

}

// Obtiene una película por su id. Esta función se debe añadir al export (abajo del todo)
// Para que pueda ser llamada desde fuera del service
const getMoviesItem = function(id){

}

// Obtiene una serie por su id. Esta función se debe añadir al export (abajo del todo)
// Para que pueda ser llamada desde fuera del service
const getSerieItem = function(id){

}

// Obtiene las películas que tengan cierto género. Esta función se debe añadir al 
// export (abajo del todo) para que pueda ser llamada desde fuera del service
const getMoviesByGenre = function(genre){

}

// Obtiene las series que tengan cierto género. Esta función se debe añadir al 
// export (abajo del todo) para que pueda ser llamada desde fuera del service
const getSeriesByGenre = function(genre){

}

export default {
    discoverMovies,
    discoverSeries
}