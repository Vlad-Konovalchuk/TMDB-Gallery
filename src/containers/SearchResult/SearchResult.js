import React, { Component } from 'react'
import { getMovies } from '../../actions/movies'
import { connect } from 'react-redux'
import Loader from '../../components/Loader/Loader'
import MovieItem from '../../components/MovieItem/MovieItem'
import queryString from 'query-string'

class SearchResult extends Component {
  componentDidMount() {
    try {
      const values = queryString.parse(this.props.location.search)
      console.log(values.filter) // "top"

      console.log(this.props.location.search) // "?filter=top&origin=im"
      // console.log(this.props.location.search)
      /*this.props.addArticle(category);*/
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const { isLoading } = this.props
    return (
      <section >
        Hell oSear Results
        {this.props.location.search}
        {/*  <ul className={styles.movies__list}>
          {console.log(movies)}
          {isLoading ? <Loader/> : <MovieItem movies={movies}/>}
        </ul>*/}
      </section>
    )
  }
}

/*function mapDispatchToProps(dispatch) {
  return {
    addArticle: (category) => {
      dispatch(getMovies(category))
    }
  };
}*/
/*
const mapStateToProps = state => {
  return {movies: state.movies.movies, isLoading: state.movies.isLoading};
};*/

/*
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieListContainer);
*/
export default SearchResult;
