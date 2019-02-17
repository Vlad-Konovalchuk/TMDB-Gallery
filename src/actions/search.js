import axios from 'axios'
import { BASE_URL } from '../urlPath'
import { TMDB_API_KEY } from '../auth'
import * as TYPE from './constants'

export const createSearch = (query) => async (dispatch) => {
  dispatch({ type: TYPE.SEARCH_FETCHING, payload: true })
  try {
/*
    https://api.themoviedb.org/3/search/movie?api_key=113d04e11b8b3f9f579000f0d91c2bcb&language=en-US&query=iron&page=1&include_adult=false
*/
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&language=en-US&query=${query}&page=1`);
    dispatch({ type: TYPE.SEARCH_SUCCESS, payload: response.data.results })
  } catch (e) {
    dispatch({ type: TYPE.SEARCH_FAILED, payload: e.message })
  } finally {
    dispatch({ type: TYPE.SEARCH_FETCHING, payload: false })
  }
}
