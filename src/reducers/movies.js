import * as type from '../actions/typeConstants'

const initialState = {
  movies: [],
  isLoading: false,
}

export function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case type.IS_LOADING:
      return { ...state, isLoading: action.payload }
    case type.MOVIES_FETCHED:
      return { ...state, movies: action.payload }
    default:
      return state
  }
}
