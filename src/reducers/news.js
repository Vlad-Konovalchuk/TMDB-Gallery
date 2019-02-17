import * as type from '../actions/constants'

const initialState = {
  posts: [],
  isLoading: false,
}


export function newsReducer(state = initialState, action) {
  switch (action.type) {
    case type.NEWS_FETCHING:
      return { ...state, isLoading: action.payload }
    case type.NEWS_FETCHED_SUCCESS:
      return { ...state, posts: action.payload }
    default:
      return state
  }
}
