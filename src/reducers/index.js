import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { moviesReducer } from './movies'
import { movieItemReducer } from './movieItem'
import { crewReducer } from './crew'
import { trailerReducer } from './movieTrailer'
import { searchReducer } from './search'


export const rootReducer = (history) => combineReducers({
  movies: moviesReducer,
  movieItem: movieItemReducer,
  crew: crewReducer,
  video: trailerReducer,
  search: searchReducer,
  router: connectRouter(history),
})

