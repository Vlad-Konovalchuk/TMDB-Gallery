import React, { Component } from 'react'
import styles from './MovieDetailsContainer.module.css'
import { connect } from 'react-redux'
import { getMovieItem } from '../../actions/movieItem'
import { getCrewList } from '../../actions/crewList'
import Loader from '../../components/Loader/Loader'
import MovieDetailsItemLayout from '../../components/MovieDetails/MovieDetailsItemLayout'
import { getTrailer } from '../../actions/movieTrailer'

class MovieDetails extends Component {
  componentDidMount() {
    this.props.getMovieItem(this.props.match.params.id)
    this.props.getCrewList(this.props.match.params.id)
    // this.props.getTrailer(this.props.match.params.id)
  }

  render() {
    const { item, crew, isLoading } = this.props
    return (
      <section className={styles.movie}>
        {isLoading ? <Loader/> : <MovieDetailsItemLayout info={item} cast={crew}/>}
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
    // getTrailer: id => {
    //   dispatch(getTrailer(id))
    // },
  }
}

const mapStateToProps = state => {
  return {
    crew: state.crew.crew,
    item: state.movieItem.movieItem,
    // video: state.video.trailer,
    isLoading: state.movieItem.isLoading,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieDetails)
