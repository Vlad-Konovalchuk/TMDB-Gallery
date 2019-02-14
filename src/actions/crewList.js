import axios from 'axios'
import { BASE_URL } from '../urlPath'
import { TMDB_API_KEY } from '../auth'
import { FETCH_ERROR, IS_LOADING, CREW_LIST_FETCHED } from './constants'

export const getCrewList = (id) => async (dispatch) => {
  dispatch({ type: IS_LOADING, payload: true })
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/credits?api_key=${TMDB_API_KEY}`,
    )
    dispatch({ type: CREW_LIST_FETCHED, payload: response.data })
  } catch (e) {
    dispatch({ type: FETCH_ERROR, payload: true })
  } finally {
    dispatch({ type: IS_LOADING, payload: false })
  }
}
