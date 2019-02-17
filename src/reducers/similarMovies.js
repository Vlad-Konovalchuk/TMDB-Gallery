import * as TYPE from '../actions/constants'

const initialState = {
  items: [],
  isLoading: false,
  isError: false,
  error: null,
}


export function similarMovies(state = initialState, action) {
  switch (action.type) {
    case TYPE.SIMILAR_LIST_IS_LOADING:
      return { ...state, isLoading: action.payload, isError: false }
    case TYPE.SIMILAR_LIST_FETCH_SUCCESS:
      return { ...state, items: action.payload, isError: false }
    case TYPE.SEARCH_FAILED:
      return { ...state, error: action.payload, isError: true }
    default:
      return state
  }
}
