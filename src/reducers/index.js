import {combineReducers} from 'redux'
import {ADD_POST} from "../actionTypes";

// import {routeReducer} from 'react-router-redux'

// export default combineReducers(({
//  routing:routeReducer
// }))


const initialState = {
    posts: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST:
            console.log('ADD_POST');
            state.posts = [...state.posts,action.payload];
            break;
        default:
            return state
    }


    return state;
};
export default rootReducer;