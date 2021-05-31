import {call,put,takeLatest} from 'redux-saga/effects';
import {getPopularMoviesAPI} from '../api/api';
import {setPopularMovies} from '../redux/actions/Movies'
import {MoviesActionTypes as ActionTypes} from '../redux/types/ActionTypes'



function * getPopularMovies(action){
    try {
        console.log('getPopularMoviesSaga',action)
        const {searchQuery,page}=action;
        const response=yield call(getPopularMoviesAPI,searchQuery,page)
        console.log('response',response)
        yield put(setPopularMovies(false,response.data))
    } catch (e) {
        yield put(setPopularMovies(true))
    }
}

export default [
    takeLatest(ActionTypes.getPopularMoviesAction,getPopularMovies)
]