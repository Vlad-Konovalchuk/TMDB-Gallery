import React, {Component} from 'react';
import styles from './MovieDetails.module.css';
import axios from "axios";
import {BASE_URL, RELATED_MOVIES} from "../../urlPath";
import {TMDB_API_KEY} from "../../auth";
import Loader from "../Loader/Loader";
import MovieDetailsItemLayout from "./MovieDetailsItemLayout";

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
        crew: [],
        relatedMovie: [],
    };

    getMovieDetails = async () => {
        return await axios.get(`${BASE_URL}/movie/${this.props.match.params.id}?api_key=${TMDB_API_KEY}`);
    };
    getCrewInfo = async () => {
        return await axios.get(`${BASE_URL}/movie/${this.props.match.params.id}/credits?api_key=${TMDB_API_KEY}`);
    };
    getRelated = async () => {
        const {match} = this.props;
        return axios.get(RELATED_MOVIES(match.params.id, TMDB_API_KEY));
    };

    async componentDidMount() {
        try {
            this.setState({loading: true});
            const movie = (await this.getMovieDetails()).data;
            const crew = (await this.getCrewInfo()).data.cast;
            const relatedMovie = (await this.getRelated()).data.results;
            // console.log(relatedMovie);
            this.setState({
                relatedMovie,
                crew,
                genres: movie.genres,
                id: movie.id,
                originalTitle: movie.original_title,
                overview: movie.overview,
                releaseDate: movie.release_date,
                budget: movie.budget,
                poster: movie.poster_path,
                countries: movie.production_countries,
                companies: movie.production_companies,
            })
        } catch (e) {
            console.log(e);
            this.setState({errors: e})
        } finally {
            this.setState({loading: false})

        }
    }

    render() {
        const {loading,relatedMovie,  crew = [], budget, companies = [], countries = [], genres = [], originalTitle, overview, poster, releaseDate} = this.state;
        const data = {relatedMovie,crew, budget, companies, countries, genres, originalTitle, overview, poster, releaseDate};
        return (
            <section className={styles.details}>
                {/*{console.log(relatedMovie)}*/}
                {loading ? <Loader/> : <MovieDetailsItemLayout info={data} rel={this.state.relatedMovie}/>}
            </section>
        );
    }
}

export default MovieDetails;
