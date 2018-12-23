import React, {Component} from "react";
import styles from "./MovieListContainer.module.css";
import MovieItem from "../MovieItem/MovieItem";
import Loader from "../Loader/Loader";
import {getMovies} from "../../actions/movies";
import {connect} from "react-redux";

class MovieListContainer extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
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

const MovieListContainerConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieListContainer);
export default MovieListContainerConnected;
