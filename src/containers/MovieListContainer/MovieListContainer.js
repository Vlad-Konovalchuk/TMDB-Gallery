import React, {Component} from "react";
import styles from "./MovieListContainer.module.css";
import {getMovies} from "../../actions/movies";
import {connect} from "react-redux";
import Loader from "../../components/Loader/Loader";
import MovieItem from "../../components/MovieItem/MovieItem";

class MovieListContainer extends Component {
    componentDidMount() {
        const {category} = this.props;
        try {
            this.props.addArticle(category);
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        const {isLoading, movies} = this.props;
        return (
            <section className={styles.main}>
                <ul className={styles.movies__list}>
                    {console.log(movies)}
                    {isLoading ? <Loader/> : <MovieItem movies={movies}/>}
                </ul>
            </section>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addArticle: (category) => {
            dispatch(getMovies(category))
        }
    };
}

const mapStateToProps = state => {
    return {movies: state.movies.movies, isLoading: state.movies.isLoading};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieListContainer);
