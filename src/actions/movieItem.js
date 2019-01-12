import axios from "axios";
import {BASE_URL} from "../urlPath";
import {FETCH_ERROR, IS_LOADING, MOVIE_ITEM_FETCHED} from "./typeConstants";

export const getMovieItem = (id) => async (dispatch) => {
    dispatch({type: IS_LOADING, payload: true});
    try {
        const response = await axios.get(
            `${BASE_URL}/movie/${id}?api_key=${process.env.TMDB_API_KEY}`
        );
        console.log(response.data);
        dispatch({type: MOVIE_ITEM_FETCHED, payload: response.data});
    } catch (e) {
        dispatch({type: FETCH_ERROR, payload: true});

    } finally {
        dispatch({type: IS_LOADING, payload: false});
    }
};
