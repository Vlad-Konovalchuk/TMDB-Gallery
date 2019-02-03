import React, { Component } from 'react'
import queryString from 'query-string'
import axios from 'axios'
import { TMDB_API_KEY } from '../../auth'
import { POSTER_URL } from '../../urlPath'

class SearchResult extends Component {
  state = {
    data: [],
    isLoading: true,
  }
  getData = async (value) => {
    // const data = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${TMDB_API_KEY}&language=en-US&query=${value}&page=1&include_adult=false`)
    const data = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&language=en-US&query=${value}&page=1&include_adult=true`)
    return data.data.results
  }

  componentDidMount() {
    try {
      const values = queryString.parse(this.props.location.search)
      this.getData(values.query).then(res => this.setState({ data: res }))
    } catch (e) {
      /*      this.props.history.push({
              pathname: '/error',
              state: { message: e.message },
            })*/
      // new Error(e.message)
    } finally {
      this.setState({ isLoading: false })
    }
  }

  render() {
    const { isLoading, data } = this.state
    return (
      <section>
        Hell oSear Results
        <ol>
          {isLoading ? <h3>Loading...</h3> :
            data.map(item => (
              <li key={item.id}>
                <h2> {item.title || item.name}</h2>
                <img src={POSTER_URL + item.poster_path} alt=""/>
              </li>
            ))
          }
        </ol>
      </section>
    )
  }
}

export default SearchResult
