import React from 'react'
import styles from './MovieDetails.module.scss'
import { transformCurrency, transformDate } from '../../utils'

const MovieDetailsItemLayout = props => {
  const {
    budget,
    production_countries = [],
    production_companies = [],
    genres = [],
    originalTitle,
    overview,
    poster_path,
    release_date,
  } = props.info
  const { cast = [] } = props.cast
  return (
    <div className={styles.movie}>
      <header className={styles.movie__header}>
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
      </header>
      <section className={styles.movie__body}>
        <div className={styles['movie__additional--noflex']}>
          <h3 className={styles.sub__title}>Cast List: </h3>
          <ul className={styles.cast__list}>
            {cast.slice(0, 6).map(item => (
              <li key={item.id} className={styles.cast__item}>
                <img
                  className={styles.cast__img}
                  src={`http://image.tmdb.org/t/p/w45${item.profile_path}`}
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
      <section className={styles.trailers}>
{/*        <div className={styles.video}>
          <a>
            <picture>
              <source srcSet="https://i.ytimg.com/vi_webp/bKdpGHazAqs/maxresdefault.webp" type="image/webp"/>
              <img className={styles.video__media} src="https://i.ytimg.com/vi/bKdpGHazAqs/maxresdefault.jpg"
                   alt=""/>
            </picture>
          </a>
          <button className={styles['play-btn']} aria-label="Play trailer">
            <svg width="68" height="48" viewBox="0 0 68 48">
              <path className={styles['play-btn-shape']}
                    d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"></path>
              <path className={styles['play-btn-icon']} d="M 45,24 27,14 27,34"></path>
            </svg>
          </button>
        </div>*/}
        <iframe src="" frameborder="0"></iframe>
      </section>
    </div>
  )
}

export default MovieDetailsItemLayout
