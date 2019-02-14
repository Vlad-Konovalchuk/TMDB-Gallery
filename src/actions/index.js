import * as type from "./constants";

import axios from 'axios';

// export const addMovies = ({ title, userId }) => {
//   return dispatch => {
//     dispatch(addTodoStarted());
//
//     axios
//         .post(`https://jsonplaceholder.typicode.com/todos`, {
//           title,
//           userId,
//           completed: false
//         })
//         .then(res => {
//           dispatch(addTodoSuccess(res.data));
//         })
//         .catch(err => {
//           dispatch(addTodoFailure(err.message));
//         });
//   };
// };

export function itemsHasErrored(bool) {
    return {
        type: type.FETCH_ERROR,
        hasErrored: bool
    };
}

export function moviesIsLoading(bool) {
    return {
        type: type.IS_LOADING,
        isLoading: bool
    };
}

export function moviesFetchDataSuccess(movies) {
    return {
        type: type.MOVIES_FETCHED,
        movies
    };
}
