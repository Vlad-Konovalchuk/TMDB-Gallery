import * as type from "./constants";

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
