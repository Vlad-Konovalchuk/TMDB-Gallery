import axios from "axios";
import {TMDB_API_KEY} from "../auth";
import {FETCH_ERROR, IS_LOADING, MOVIES_FETCHED} from "./typeConstants";

export const getMovies = (category) => async (dispatch) => {
    dispatch({type: IS_LOADING, payload: true});
    try {
        const response = await axios.get(`${category}${TMDB_API_KEY}`);
        dispatch({type: MOVIES_FETCHED, payload: response.data.results});
    } catch (e) {
        dispatch({type: FETCH_ERROR, payload: true});

    } finally {
        dispatch({type: IS_LOADING, payload: false});
    }
};