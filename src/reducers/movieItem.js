import * as type from "../actions/typeConstants";

const initialState = {
    movieItem: [],
    isLoading: false
};

export function movieItemReducer(state = initialState, action) {
    switch (action.type) {
        case type.IS_LOADING:
            return {...state, isLoading: action.payload};
        case type.MOVIE_ITEM_FETCHED:
            return {...state, movieItem: action.payload};
        default:
            return state;
    }
}
