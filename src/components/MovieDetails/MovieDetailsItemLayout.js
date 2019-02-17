import React from 'react'
import styles from './MovieDetails.module.scss'
import { transformCurrency, transformDate } from '../../utils'


const MovieDetailsItemLayout = (props) => {
  const {
    budget,
    production_countries = [],
    production_companies = [],
    genres = [],
    originalTitle,
    overview,
    poster_path,
    release_date,
  } = props.movie
  const { cast = [] } = props.castList
  return (
    <div className={styles.movie}>
      <div className={styles.movie__header}>
        <img
          className={styles.movie__poster}
          src={`http://image.tmdb.org/t/p/w185${poster_path}`}
          alt={originalTitle}
        />
        <div className={styles.movie__overview}>
          <h1 className={styles.movie__title}>{originalTitle}</h1>
          <h2 className={styles.sub__title}>Description:</h2>
          <p>{overview}</p>
          <ul className={styles.movie__additional}>
            <h3 className={styles.sub__title}>Genres: </h3>
            {genres.map(item => (
              <li className={styles.additional__item} key={item.id}>
                {item.name}
              </li>
            ))}
          </ul>
          <div className={styles.movie__additional}>
            <h3 className={styles.sub__title}>Release Date: </h3>
            {transformDate(release_date)}.
          </div>
          <div className={styles.movie__additional}>
            <h3 className={styles.sub__title}> Movie Budget: </h3>
            {transformCurrency(budget)}.
          </div>
          <ul className={styles.movie__additional}>
            <h3 className={styles.sub__title}>Countries: </h3>
            {production_countries.map(item => (
              <li className={styles.additional__item} key={item.id}>
                {item.name}
              </li>
            ))}
          </ul>
          <ul className={styles.movie__additional}>
            <h3 className={styles.sub__title}>Companies: </h3>
            {production_companies.map(item => (
              <li className={styles.additional__item} key={item.name}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <section className={styles.movie__body}>
        <div className={styles['movie__additional--noflex']}>
          <h3>Cast List: </h3>
          <ul className={styles.cast__list}>
            {props.castList.slice(0, 7).map(item => (
              <li className={styles.cast__item} key={item.name}>
                <img
                  className={styles['cast__image']}
                  src={`http://image.tmdb.org/t/p/w185${item.profile_path}`}
                  alt={item.name}
                />
                <p className={styles.movie__person}>
                  <span>{item.name} as </span>
                  <span>{item.character}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default MovieDetailsItemLayout
