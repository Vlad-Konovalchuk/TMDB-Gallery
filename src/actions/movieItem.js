import axios from 'axios'
import { BASE_URL } from '../urlPath'
import { TMDB_API_KEY } from '../auth'
import { FETCH_ERROR, IS_LOADING, MOVIE_ITEM_FETCHED } from './typeConstants'

export const getMovieItem = (id) => async (dispatch) => {
  dispatch({ type: IS_LOADING, payload: true })
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${TMDB_API_KEY}&append_to_response=videos`,
    )
    dispatch({ type: MOVIE_ITEM_FETCHED, payload: response.data })
  } catch (e) {
    dispatch({ type: FETCH_ERROR, payload: true })

  } finally {
    dispatch({ type: IS_LOADING, payload: false })
  }
}
