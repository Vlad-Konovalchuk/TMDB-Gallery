import React, {Component} from 'react';
import styles from './MovieDetails.module.css';
import axios from "axios";
import {BASE_URL, POSTER_URL} from "../../urlPath";
import {TMDB_API_KEY} from "../../auth";
import {Link} from "react-router-dom";
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
            // console.log(movie);
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
                        <div className="wrapper">
                            <div className="movie__poster">
                                <img src={`http://image.tmdb.org/t/p/w300${poster}`} alt='dsds'/>
                            </div>
                            <div className="movie__details">
                                <h1>{originalTitle}</h1>
                                <p>{overview}</p>
                                <p>{releaseDate}</p>
                                <p>{budget}</p>
                                <ul>
                                    {genres.map(item => <li key={item.id}>{item.name}</li>)}
                                </ul>
                                <ul>
                                    <h2>Countries</h2>
                                    {countries.map(item => <li key={item.name}>{item.name}</li>)}
                                </ul>
                                <ul>
                                    <h2>Companies</h2>
                                    {companies.map(item => <li key={item.id}>{item.name}</li>)}
                                </ul>
                            </div>
                        </div>
                }
            </section>
        );
    }
}

export default MovieDetails;
