import {MoviesActionTypes as ActionTypes} from '../types/ActionTypes'

export const getPopularMovies = (searchQuery='',page=1)=>({
    type:ActionTypes.getPopularMoviesAction,
    searchQuery,
    page
});
export const setPopularMovies = (hasError,movies)=>({
    type:ActionTypes.setPopularMoviesAction,
    hasError,
    movies
});
export const resetPopularMovies = ()=>({
    type:ActionTypes.resetPopularMoviesAction
})
