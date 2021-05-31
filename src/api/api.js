import axios from 'axios'

const API_KEY='4c978f3cdca479a4a57c190b58af61c0';

export const getPopularMoviesAPI=(searhQuery,page)=>{
    const getAllPopularMovies=`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
    const getPopularMoviesByName=`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query='${searhQuery}'&page=${page}`;
    const url=searhQuery?getPopularMoviesByName:getAllPopularMovies;
    return axios.get(url)
}