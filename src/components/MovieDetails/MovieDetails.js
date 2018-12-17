import React, {Component} from 'react';
import styles from './MovieDetails.module.css';
import axios from "axios";
import {BASE_URL, POSTER_URL} from "../../urlPath";
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
        crew: []
    };

    getMovieDetails = async () => {
        const response = await axios.get(`${BASE_URL}/movie/${this.props.match.params.id}?api_key=${TMDB_API_KEY}`);
        return response.data;
    };
    getCrewInfo = async () => {
        const credits = await axios.get(`${BASE_URL}/movie/${this.props.match.params.id}/credits?api_key=${TMDB_API_KEY}`);
        return credits.data;
    };

    async componentDidMount() {
        try {
            this.setState({loading: true});
            const movie = await this.getMovieDetails();
            const crew = await this.getCrewInfo();
            // console.log(movie);
            this.setState({
                crew:crew.cast,
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
        const {loading, crew=[], budget, companies = [], countries = [], genres = [], originalTitle, overview, poster, releaseDate} = this.state;
        return (
            <section className={styles.movie}>
                {
                    loading ? <Loader/> :
                        <div className={styles.movie__wrapper}>
                            <div className={styles.movie__poster}>
                                <img src={`http://image.tmdb.org/t/p/w300${poster}`} alt={originalTitle}/>
                            </div>
                            <div className={styles.movie__details}>
                                <h1 className={styles.movie__title}>{originalTitle}</h1>
                                <p className={styles.movie__overview}>
                                    <h3 className={styles.sub__title}>Description:</h3>
                                    {overview}
                                </p>
                                <ul className={styles.genre__list}>
                                    <h3 className={styles.sub__title}>Genres:</h3>
                                    {genres.map(item => <li className={styles.genre__list__item}
                                                            key={item.id}>{item.name},</li>)}
                                </ul>
                                <p className={styles.movie__date}>
                                    <h3 className={styles.sub__title}>Release Date: </h3>
                                    {releaseDate}
                                </p>
                                <p>
                                    <h3 className={styles.sub__title}> Movie Budget: </h3>
                                    {budget}
                                </p>
                                <div className={styles.movie__footer}>
                                    <div className={styles.movie__company}>
                                        <h3 className={styles.sub__title}>Companies</h3>
                                        <ul className={styles.movie__list}>
                                            {companies.map(item => <li className={styles.movie__list__item}
                                                                       key={item.id}>{item.name}</li>)}
                                        </ul>
                                    </div>
                                    <div className={styles.movie__countries}>
                                        <h3 className={styles.sub__title}>Countries</h3>
                                        <ul className={styles.movie__list}>
                                            {countries.map(item => <li className={styles.movie__list__item}
                                                                       key={item.name}>{item.name}</li>)}
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <h3 className={styles.sub__title}>Crew List</h3>
                                    <ul>
                                        {crew.map(item=><li key={item.id}>{item.name}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                }
            </section>
        );
    }
}

export default MovieDetails;
