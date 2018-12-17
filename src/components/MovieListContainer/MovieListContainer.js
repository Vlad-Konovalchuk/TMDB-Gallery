import React, {Component} from 'react';
import styles from './MovieListContainer.module.css';
import axios from 'axios';
import {POPULAR_FILMS} from '../../urlPath';
import {TMDB_API_KEY} from '../../auth';
import MovieItem from "../MovieItem/MovieItem";

class MovieListContainer extends Component {
    constructor(props){
        super(props)
    }
    state = {
        films: [],
        loading: false,
        errors: null
    };

    getFilms = async () => {
        const {category} = this.props;
        const response = await axios.get(`${category}${TMDB_API_KEY}`);
        return response.data;
    };

    async componentDidMount() {
        console.log(this.props);
        try {
            this.setState({loading: true});
            const films = await this.getFilms();
            console.log(films);
            this.setState({films: films.results})
        } catch (e) {
            console.log(e);
            this.setState({errors: e})
        } finally {
            this.setState({loading: false});
        }
    }

    render() {
        const {loading, films = []} = this.state;
        return (
            <section className={styles.main}>
                <ul className={styles.movies__list}>
                    {loading ? <h2>The list of films has already flown to you</h2> : <MovieItem movie={films}/>}
                </ul>
            </section>
        );
    }
}

export default MovieListContainer;
