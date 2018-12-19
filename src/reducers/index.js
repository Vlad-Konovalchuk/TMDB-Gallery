import {combineReducers} from 'redux'
import {ADD_POST} from "../actionTypes";

// import {routeReducer} from 'react-router-redux'

// export default combineReducers(({
//  routing:routeReducer
// }))


const initialState = {
    posts: [
        {id:231,name:'Alex'},
        {id:312,name:'Mike'},
        {id:123,name:'John'},
        {id:114,name:'Dick'},
    ]
};

function rootReducer(state = initialState, action) {
    let {posts} = state;
    switch (action.type) {
        case ADD_POST:
            // state.posts = [...state.posts,action.payload];
            // return state.posts = [...posts,action.payload];
            console.log({...state,posts:[...state.posts,action.payload]});
            return {...state,posts:[...state.posts,action.payload]};
            break;
        default:
            return state
    }


    return state;
};
export default rootReducer;