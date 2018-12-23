import React, {Component} from "react";
import styles from "./MovieDetails.module.css";
import axios from "axios";
import {BASE_URL, POSTER_URL} from "../../urlPath";
import {TMDB_API_KEY} from "../../auth";
import Loader from "../Loader/Loader";
import MovieDetailsItemLayout from "./MovieDetailsItemLayout";
import {getMovies} from "../../actions/movies";
import {connect} from "react-redux";

class MovieDetails extends Component {
    state = {
        loading: false,
        errors: null,
        genres: [],
        id: null,
        originalTitle: null,
        overview: null,
        releaseDate: null,
        budget: null,
        poster: null,
        countries: [],
        companies: [],
        crew: []
    };

    getMovieDetails = async () => {
        const response = await axios.get(
            `${BASE_URL}/movie/${this.props.match.params.id}?api_key=${TMDB_API_KEY}`
        );
        return response.data;
    };
    getCrewInfo = async () => {
        const credits = await axios.get(
            `${BASE_URL}/movie/${
                this.props.match.params.id
                }/credits?api_key=${TMDB_API_KEY}`
        );
        return credits.data;
    };

    async componentDidMount() {
        try {
            this.setState({loading: true});
            const movie = await this.getMovieDetails();
            const crew = await this.getCrewInfo();
            // console.log(movie);
            this.setState({
                crew: crew.cast,
                genres: movie.genres,
                id: movie.id,
                originalTitle: movie.original_title,
                overview: movie.overview,
                releaseDate: movie.release_date,
                budget: movie.budget,
                poster: movie.poster_path,
                countries: movie.production_countries,
                companies: movie.production_companies
            });
        } catch (e) {
            console.log(e);
            this.setState({errors: e});
        } finally {
            this.setState({loading: false});
        }
    }

    render() {
        const {
            loading,
            crew = [],
            budget,
            companies = [],
            countries = [],
            genres = [],
            originalTitle,
            overview,
            poster,
            releaseDate
        } = this.state;
        const data = {
            crew,
            budget,
            companies,
            countries,
            genres,
            originalTitle,
            overview,
            poster,
            releaseDate
        };
        return (
            <section className={styles.movie}>
                {loading ? <Loader/> : <MovieDetailsItemLayout info={data}/>}
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
)(MovieDetails);
