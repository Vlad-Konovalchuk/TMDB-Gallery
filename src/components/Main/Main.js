import React, {Component} from "react";
import styles from "./Main.module.css";
import axios from "axios";
import {TOP_RATED_FILMS} from "../../urlPath";
import {NEWS_API_KEY, TMDB_API_KEY} from "../../auth";
import NewsItem from "../NewsItem/NewsItem";
import Loader from "../Loader/Loader";
import {connect} from "react-redux";
import {addArticle} from "../../actions";
import {getMovies} from "../../actions/movies";

class Main extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        user: ""
    };

    handleChacnge = e => {
        this.setState({user: e.target.value});
    };
    handleSubmit = e => {
        e.preventDefault();
        const {user} = this.state;
        const id = Math.floor(Math.random() * 10);
        this.props.addArticle({name: user, id});
        this.setState({user: ""});
    };
    // state = {
    //     movies: []
    // };
    // getmovies = async () => {
    //     const response = await axios.get(`${HOLLYWOOD_NEWS}${NEWS_API_KEY}`);
    //     return response.data;
    // };
    //
    // async componentDidMount() {
    //     try {
    //         this.setState({loading: true});
    //         const movies = await this.getmovies();
    //         console.log(movies);
    //         this.setState({movies: movies.articles})
    //     } catch (e) {
    //         console.log(e);
    //         this.setState({errors: e})
    //     } finally {
    //         this.setState({loading: false});
    //     }
    // }

    render() {
        // const {loading, movies = []} = this.state;
        return (
            <section className={styles.main}>
                <h1 className={styles.title}>News from Hollywood</h1>
                {/*<p className={styles.list}>*/}
                    {/*/!*{loading ? <Loader/> : movies.map(post => <NewsItem {...post}/>)}*!/*/}
                    {/*{this.props.movies.map(item => (*/}
                        {/*<li key={item.id}>{item.title}</li>*/}
                    {/*))}*/}
                {/*</p>*/}
                {/*<input*/}
                    {/*type="text"*/}
                    {/*value={this.state.user}*/}
                    {/*onChange={this.handleChacnge}*/}
                {/*/>*/}
                {/*<button onClick={this.handleSubmit}>Send to store</button>*/}
                {/*<p>{this.state.user}</p>*/}
            </section>
        );
    }
}

export default Main;
