import React, {Component} from 'react';
import styles from './MovieDetails.module.css';
import axios from "axios";
import {BASE_URL, POSTER_BIG_URL} from "../../urlPath";
import {TMDB_API_KEY} from "../../auth";
import Loader from "../Loader/Loader";

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
    };

    getMovieDetails = async () => {
        const response = await axios.get(`${BASE_URL}/movie/${this.props.match.params.id}?api_key=${TMDB_API_KEY}`);
        return response.data;
    };

    async componentDidMount() {
        try {
            this.setState({loading: true});
            const movie = await this.getMovieDetails();
            this.setState({
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
        const {loading, budget, companies = [], countries = [], genres = [], originalTitle, overview, poster, releaseDate} = this.state;
        return (
            <section className={styles.movie}>
                {
                    loading ? <Loader/> :
                        <div className={styles.movie__wrapper}>
                            <div className={styles.movie__poster}>
                                <img src={`${POSTER_BIG_URL}${poster}`} alt={originalTitle}/>
                            </div>
                            <div className="movie__details">
                                <h1 className={styles.movie__title}>Title: {originalTitle}</h1>
                                <p className={styles.movie__overview}>
                                    <h3>Description:</h3><br/>
                                    {overview}
                                </p>
                                <ul className={styles.genre__list}>
                                    <h3 className={styles.genre__title}>Genres:</h3>
                                    {genres.map(item => <li className={styles.genre__list__item}
                                                            key={item.id}>{item.name},</li>)}
                                </ul>
                                <p className={styles.movie__date}>
                                    <strong>Release Date: </strong>
                                    {releaseDate}
                                </p>
                                <p>
                                    <strong> Movie Budget: </strong>
                                    {budget}
                                </p>
                                <h4>Countries</h4>
                                <ul className={styles.movie__list}>
                                    {countries.map(item => <li className={styles.movie__list__item}
                                                               key={item.name}>{item.name}</li>)}
                                </ul>
                                <h4>Companies</h4>
                                <ul className={styles.movie__list}>
                                    {companies.map(item => <li className={styles.movie__list__item}
                                                               key={item.id}>{item.name}</li>)}
                                </ul>
                            </div>
                        </div>
                }
            </section>
        );
    }
}

export default MovieDetails;
