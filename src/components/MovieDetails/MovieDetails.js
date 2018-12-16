import React, {Component} from 'react';
import styles from './MovieDetails.module.css';
import axios from "axios";
import {BASE_URL, POSTER_URL} from "../../urlPath";
import {TMDB_API_KEY} from "../../auth";
import {Link} from "react-router-dom";
import Loader from "../Loader/Loader";

class MovieDetails extends Component {
    state = {
        movie: [],
        loading: false,
        errors: null,
        budget:null,
        genres:[],
        id:null
    };

    getMovieDetails = async () => {
        const response = await axios.get(`${BASE_URL}/movie/${this.props.match.params.id}?api_key=${TMDB_API_KEY}`);
        return response.data;
    };

    async componentDidMount() {
        try {
            this.setState({loading: true});
            const movie = await this.getMovieDetails();
            console.log(movie);
            this.setState({movie: movie,loading:false})
            // this.setState((state, props) => ({
            //     movie: movie
            // }));
        } catch (e) {
            console.log(e);
            this.setState({errors: e})
        }
        finally {
            if(this.state.movie.length > 0){
                console.log('set false')
                this.setState({loading:false})
            }
        }
    }

    render() {
        const {movie = [], loading} = this.state;
        return (
            <section className={styles.movie}>
                {
                    loading ? <Loader/> :
                        <div className="wrapper">
                            <div className="movie__poster">
                                <img src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`} alt='dsds'/>
                            </div>
                            <div className="movie__details">
                                <h1>{movie.original_title}</h1>
                                <p>{movie.overview}</p>
                                <p>{movie.release_date}</p>
                                <p>{movie.budget}</p>
                                <ul>
                                    {console.log(movie)}
                                    {/*{movie.genres.map(item => <li key={item.id}>{item.name}</li>)}*/}
                                </ul>
                                {/*<ul>*/}
                                {/*<h2>Countries</h2>*/}
                                {/*{movie.production_countries.map(item => <li key={item.name}>{item.name}</li>)}*/}
                                {/*</ul>*/}
                                {/*<ul>*/}
                                {/*<h2>Companies</h2>*/}
                                {/*{movie.production_companies.map(item => <li key={item.id}>{item.name}</li>)}*/}
                                {/*</ul>*/}
                            </div>
                        </div>
                }
            </section>
        );
    }
}

export default MovieDetails;
