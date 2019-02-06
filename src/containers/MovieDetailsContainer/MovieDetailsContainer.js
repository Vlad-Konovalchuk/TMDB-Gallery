import React, { PureComponent } from 'react'
import axios from 'axios'
import styles from './MovieDetailsContainer.module.css'
import { connect } from 'react-redux'
import { getMovieItem } from '../../actions/movieItem'
import { getCrewList } from '../../actions/crewList'
import Loader from '../../components/Loader/Loader'
import MovieDetailsItemLayout from '../../components/MovieDetails/MovieDetailsItemLayout'

class MovieDetails extends PureComponent {
  state = {
    additionalCategory: null,
    data: [],
    loading: false,
  }

  componentDidMount() {
    this.props.getMovieItem(this.props.match.params.id)
    this.props.getCrewList(this.props.match.params.id)
    this.setState({ loading: true })
    this.getAdditionalMovies('similar')
      .then(data => this.setState({ data: data.data.results }, () => this.setState({ loading: false })))
  }

  handleClick = (e) => {
    this.setState({ loading: true })
    const value = e.target.dataset.category
    this.getAdditionalMovies(value)
      .then(data => this.setState({ data: data.data.results }, () => this.setState({ loading: false })))

  }
  getAdditionalMovies = async (value) => {
    return axios.get(`https://api.themoviedb.org/3/movie/297802/${value}?api_key=${process.env.REACT_APP_SECRET_CODE}&language=en-US&page=1`)
  }

  render() {
    const { item, crew, isLoading } = this.props
    return (
      <section className={styles.movie}>
        {isLoading ? <Loader/> :
          <MovieDetailsItemLayout
            info={item}
            cast={crew}
            handleClick={this.handleClick}
            data={this.state.data}
            loading={this.state.loading}
          />}
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
  }
}

const mapStateToProps = state => {
  return {
    crew: state.crew.crew,
    item: state.movieItem.movieItem,
    isLoading: state.movieItem.isLoading,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieDetails)
