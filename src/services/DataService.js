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

const discoverSeries = function(page){

}


export default {
    discoverMovies
}