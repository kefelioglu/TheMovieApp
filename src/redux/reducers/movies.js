import {MoviesActionTypes as ActionTypes} from '../types/ActionTypes'

const INITAL_STATE = {
    movies: [],
    searchQuery:'',
    page:0,
    total_pages:0,
    total_results:0,

}

export default function (state=INITAL_STATE,action){
    switch(action.type){
        case ActionTypes.setPopularMoviesAction:
            if(action.hasError)
                return state;
            else if(action.movies.page===1)
            {
                return {
                    ...state,
                    movies:action.movies.results,
                    page:action.movies.page,
                    total_pages:action.movies.total_pages,
                    total_results:action.movies.total_results,
                }    
            } 
            else if(action.movies.page>1)
            {
                return {
                    ...state,
                    movies:state.movies.concat(action.movies.results),
                    page:action.movies.page,
                    total_pages:action.movies.total_pages,
                    total_results:action.movies.total_results,
                }   
                
                
    
            }      
            
        default: 
            return state;
    }
}