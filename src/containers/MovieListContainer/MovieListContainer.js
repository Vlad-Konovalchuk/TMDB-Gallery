import React, { PureComponent } from 'react';
import styles from './MovieListContainer.module.css';
import { getMovies } from '../../actions/movies';
import { connect } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import MovieItem from '../../components/MovieItem/MovieItem';
import Grid from '@material-ui/core/Grid';

class MovieListContainer extends PureComponent {
  state = {
    spacing: '16',
  }

  componentDidMount() {
    const { category } = this.props
    try {
      this.props.getDetails(category)
    } catch (e) {
      throw new Error(e.message)
    }
  }

  render() {
    const { isLoading, movies = [] } = this.props
    const { spacing } = this.state
    return (
      <Grid item xs={12} className={styles.root} container justify="space-around" spacing={Number(spacing)}>
        {isLoading ? <Loader/> : (
          movies.map(movie => (
            <Grid item><MovieItem key={movie.id} movie={movie}/></Grid>
          ))
        )}
      </Grid>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getDetails: (category) => {
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
