import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./MovieItem.module.css";
import * as ROUTES from "../../routes";
import { POSTER_URL } from "../../urlPath";

const MovieItem = props => {
  return props.movie.map(item => {
    return (
      <li key={item.id} className={styles.movies__item}>
        <Link to={`${ROUTES.MOVIELIST}/${item.id}`}>
          <img
            src={POSTER_URL + item.poster_path}
            alt={item.title}
            className={styles.movoies__poster}
          />
          <div className={styles.movie__info}>
            <h2>{item.title}</h2>
          </div>
        </Link>
      </li>
    );
  });
};

export default MovieItem;
