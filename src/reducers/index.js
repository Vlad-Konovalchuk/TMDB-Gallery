import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import {moviesReducer} from "./movies";
import {movieItemReducer} from "./movieItem";


export const rootReducer = (history) => combineReducers({
    movies: moviesReducer,
    movieItem:movieItemReducer,
    router: connectRouter(history)
});

