import React from "react";
import styles from "./MovieDetails.module.css";

const MovieDetailsItemLayout = props => {
  const {
    crew = [],
    budget,
    companies = [],
    countries = [],
    genres = [],
    originalTitle,
    overview,
    poster,
    releaseDate
  } = props.info;
  return (
    <div className={styles.movie__wrapper}>
      <div className={styles.movie__poster}>
        <img
          src={`http://image.tmdb.org/t/p/w300${poster}`}
          alt={originalTitle}
        />
      </div>
      <div className={styles.movie__details}>
        <h1 className={styles.movie__title}>{originalTitle}</h1>
        <p className={styles.movie__overview}>
          <h3 className={styles.sub__title}>Description:</h3>
          {overview}
        </p>
        <ul className={styles.genre__list}>
          <h3 className={styles.sub__title}>Genres:</h3>
          {genres.map(item => (
            <li className={styles.genre__list__item} key={item.id}>
              {item.name},
            </li>
          ))}
        </ul>
        <p className={styles.movie__date}>
          <h3 className={styles.sub__title}>Release Date: </h3>
          {releaseDate}
        </p>
        <p>
          <span className={styles.sub__title}> Movie Budget: </span>
          {budget}
        </p>
        <div className={styles.movie__footer}>
          <div className={styles.movie__company}>
            <h3 className={styles.sub__title}>Companies</h3>
            <ul className={styles.movie__list}>
              {companies.map(item => (
                <li className={styles.movie__list__item} key={item.id}>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.movie__countries}>
            <h3 className={styles.sub__title}>Countries</h3>
            <ul className={styles.movie__list}>
              {countries.map(item => (
                <li className={styles.movie__list__item} key={item.name}>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h3 className={styles.sub__title}>Crew List</h3>
          <ul>
            {crew.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsItemLayout;
