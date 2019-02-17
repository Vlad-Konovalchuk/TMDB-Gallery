import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { moviesReducer } from './movies'
import { movieItemReducer } from './movieItem'
import { crewReducer } from './crew'
import { newsReducer } from './news'
import { searchReducer } from './search'
import { similarMovies } from './similarMovies'


export const rootReducer = (history) => combineReducers({
  movies: moviesReducer,
  movieItem: movieItemReducer,
  crew: crewReducer,
  search: searchReducer,
  posts: newsReducer,
  similar: similarMovies,
  router: connectRouter(history),
})

