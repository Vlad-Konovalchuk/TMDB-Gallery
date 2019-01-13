import * as type from "../actions/typeConstants";

const initialState = {
  trailer: [],
  isLoading: false
};

export function trailerReducer(state = initialState, action) {
  switch (action.type) {
    case type.IS_LOADING:
      return {...state, isLoading: action.payload};
    case type.MOVIE_TRAILER_FETCHED:
      return {...state, trailer: action.payload};
    default:
      return state;
  }
}
