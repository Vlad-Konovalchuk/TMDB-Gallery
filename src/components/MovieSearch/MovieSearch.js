import React from "react";
import styles from './MovieSearch.module.css';
import axios from "axios";

class Search extends React.PureComponent {
    state = {
        value: ''
    };
    handleChange = (e) => {
        this.setState({value: e.target.value})
    };
    searchMovie = async (term) => {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&query=${term}&page=1&include_adult=false`)
        console.log(response.data)
    };
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(`I search the ${this.state.value}`)
        this.searchMovie(this.state.value);
    };

    render() {
        return (
            <div className={styles.search}>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder='enter name of film' value={this.state.value}
                           onChange={this.handleChange}/>
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default Search;
