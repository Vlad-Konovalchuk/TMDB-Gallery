import React, { PureComponent } from 'react'
import { List } from '../../components/List/List'
import styles from './MovieListContainer.module.css'
import { getMovies } from '../../actions/movies'
import { connect } from 'react-redux'
import Loader from '../../components/Loader/Loader'
import MovieItem from '../../components/MovieItem/MovieItem'
import Grid from '@material-ui/core/Grid'

class MovieListContainer extends PureComponent {

  componentDidMount() {
    const { category } = this.props
    try {
      this.props.getMovies(category)
    } catch (e) {
      throw new Error(e.message)
    }
  }

  render() {
    const { isLoading, movies = [] } = this.props
    return (
      <List>
        {isLoading ? <Loader/> : (
          movies.map(movie => (
            <Grid item><MovieItem key={movie.id} movie={movie}/></Grid>
          ))
        )}
      </List>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getMovies: (category) => {
      dispatch(getMovies(category))
    },
  }
}

const mapStateToProps = state => {
  return { movies: state.movies.movies, isLoading: state.movies.isLoading }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieListContainer)
