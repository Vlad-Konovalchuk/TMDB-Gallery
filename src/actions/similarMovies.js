import axios from 'axios'
import { BASE_URL } from '../urlPath'
import { TMDB_API_KEY } from '../auth'
import { SIMILAR_LIST_FETCH_ERROR, SIMILAR_LIST_FETCH_SUCCESS, SIMILAR_LIST_IS_LOADING } from './constants'

export const getAdditionalMovies = (id) => async (dispatch) => {
  dispatch({ type: SIMILAR_LIST_IS_LOADING, payload: true })
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/similar?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
    )
    dispatch({ type: SIMILAR_LIST_FETCH_SUCCESS, payload: response.data.results })
  } catch (e) {
    dispatch({ type: SIMILAR_LIST_FETCH_ERROR, payload: true })
  } finally {
    dispatch({ type: SIMILAR_LIST_IS_LOADING, payload: false })
  }
}
