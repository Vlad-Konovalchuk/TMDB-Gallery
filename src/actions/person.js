import axios from 'axios'
import { BASE_URL } from '../urlPath'
import { TMDB_API_KEY } from '../auth'
import { FETCH_ERROR, IS_LOADING, MOVIE_TRAILER_FETCHED } from './constants'


export const getPersonData = (id) => async (dispatch) => {
  try {
    const data = await axios.get(`${BASE_URL}/movie/${id}?api_key=${TMDB_API_KEY}&append_to_response=videos`)
  } catch (e) {

  }
}
