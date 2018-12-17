import React, {Component} from 'react';
import styles from './Main.module.css';
import axios from 'axios';
import {HOLLYWOOD_NEWS} from '../../urlPath';
import {NEWS_API_KEY} from '../../auth';
import NewsItem from "../NewsItem/NewsItem";

class Main extends Component {
    state = {
        posts:[]
    };
    getFilms = async () => {
        const response = await axios.get(`${HOLLYWOOD_NEWS}${NEWS_API_KEY}`);
        return response.data;
    };

    async componentDidMount() {
        try {
            this.setState({loading: true});
            const posts = await this.getFilms();
            console.log(posts);
            this.setState({posts: posts.articles})
        } catch (e) {
            console.log(e);
            this.setState({errors: e})
        } finally {
            this.setState({loading: false});
        }
    }
    render() {
        const {loading, posts = []} = this.state;
        return (
            <section className={styles.main}>
                <h1 className={styles.title}>News from Hollywood</h1>
                <ul className={styles.movies__list}>
                    {/*<h2>FILMS LIST</h2>*/}
                    {console.log(posts)}
                    {loading ? 'Loadinng...' : posts.map(post=><NewsItem {...post}/>)}
                </ul>
            </section>
        );
    }
}

export default Main;
