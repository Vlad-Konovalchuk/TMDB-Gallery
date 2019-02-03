import React  from "react";
import { Link } from "react-router-dom";
import styles from "./MovieItem.module.scss";
import * as ROUTES from "../../routes";
import { POSTER_URL } from "../../urlPath";

const MovieItem = ({movie}) => {
  // const data = props.movies;

    return (
      <li  className={styles.movies__item}>
        <Link to={`${ROUTES.MOVIELIST}/${movie.id}`}>
          <img
            src={POSTER_URL + movie.poster_path}
            alt={movie.title}
            className={styles.movies__poster}
          />
          <div className={styles.movie__info}>
            <h2>{movie.title}</h2>
          </div>
        </Link>
      </li>
    );
};

export default MovieItem;
