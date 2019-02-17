import React, { PureComponent } from 'react'
import { getAdditionalMovies } from '../../actions/similarMovies'
import AddionalMovies from '../../components/AddionalMovies/AddionalMovies'
import styles from './MovieDetailsContainer.module.css'
import { connect } from 'react-redux'
import { getMovieItem } from '../../actions/movieItem'
import { getCrewList } from '../../actions/crewList'
import Loader from '../../components/Loader/Loader'
import MovieDetailsItemLayout from '../../components/MovieDetails/MovieDetailsItemLayout'

class MovieDetails extends PureComponent {

  componentDidMount() {
    this.props.getMovieItem(this.props.match.params.id)
    this.props.getCrewList(this.props.match.params.id)
    this.props.getAdditionalMovies(this.props.match.params.id)
  }

  render() {
    const { item, crew, similar, isLoadingMovie, isLoadingCrew, isLoadingSimilar } = this.props
    return (
      <section className={styles.movie}>
        {(isLoadingMovie && isLoadingCrew && isLoadingSimilar) ? <Loader/> :
          <>
            <MovieDetailsItemLayout
              movie={item}
              castList={crew}
            />
            <h3>Additional Movies:</h3>
            <AddionalMovies data={similar}/>
          </>
        }
      </section>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getMovieItem: id => {
      dispatch(getMovieItem(id))
    },
    getCrewList: id => {
      dispatch(getCrewList(id))
    },
    getAdditionalMovies: id => {
      dispatch(getAdditionalMovies(id))
    },
  }
}

const mapStateToProps = state => {
  return {
    isLoadingMovie: state.movieItem.isLoading,
    isLoadingCrew: state.crew.isLoading,
    isLoadingSimilar: state.similar.isLoading,
    item: state.movieItem.movieItem,
    crew: state.crew.crew,
    similar: state.similar.items,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieDetails)
