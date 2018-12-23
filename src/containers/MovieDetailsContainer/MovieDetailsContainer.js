import React, {Component} from "react";
import styles from "./MovieDetailsContainer.module.css";
import {connect} from "react-redux";
import {getMovieItem} from "../../actions/movieItem";
import Loader from "../../components/Loader/Loader";
import MovieDetailsItemLayout from "../../components/MovieDetails/MovieDetailsItemLayout";

class MovieDetails extends Component {


    /*    getMovieDetails = async () => {
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
        };*/

    componentDidMount() {
        this.props.getMovieItem(this.props.match.params.id)
    }

    render() {
        const {item, isLoading} = this.props;
        return (
            <section className={styles.movie}>
                {console.log(this.props.item)}
                {isLoading ? <Loader/> : <MovieDetailsItemLayout info={item}/>}
            </section>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getMovieItem: (id) => {
            dispatch(getMovieItem(id))
        }
    };
}

const mapStateToProps = state => {
    return {item: state.movieItem.movieItem, isLoading: state.movieItem.isLoading};
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieDetails);
