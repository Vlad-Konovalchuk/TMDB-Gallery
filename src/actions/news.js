import axios from 'axios'
import { NEWS_URL } from '../urlPath'
import { NEWS_FETCHING_ERROR, NEWS_FETCHING, NEWS_FETCHED_SUCCESS } from './constants'


export const getArticles = () => async (dispatch) => {
  dispatch({ type: NEWS_FETCHING, payload: true })
  try {
    const data = await axios.get(`${NEWS_URL}`)
    dispatch({ type: NEWS_FETCHED_SUCCESS, payload: data.data.articles })
  } catch (e) {
    dispatch({ type: NEWS_FETCHING_ERROR, error: e.message })
  } finally {
    dispatch({ type: NEWS_FETCHING, payload: false })
  }
}
