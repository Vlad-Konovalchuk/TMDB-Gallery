import * as type from '../actions/typeConstants'

const initialState = {
  crew: [],
  isLoading: false,
}

export function crewReducer(state = initialState, action) {
  switch (action.type) {
    case type.IS_LOADING:
      return { ...state, isLoading: action.payload }
    case type.CREW_LIST_FETCHED:
      return { ...state, crew: action.payload }
    default:
      return state
  }
}
