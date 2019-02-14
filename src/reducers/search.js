import * as TYPE from '../actions/constants'

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  error: null,
}


export function searchReducer(state = initialState, action) {
  switch (action.type) {
    case TYPE.SEARCH_FETCHING:
      return { ...state, isLoading: action.payload, isError: false }
    case TYPE.SEARCH_SUCCESS:
      return { ...state, data: action.payload, isError: false }
    case TYPE.SEARCH_FAILED:
      return { ...state, error: action.payload, isError: true }
    default:
      return state
  }
}
