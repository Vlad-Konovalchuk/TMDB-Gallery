import React from 'react';
import styles from "./MovieDetails.module.css";


const MovieDetailsItemLayout = (props) => {
    const {related = [], crew = [], budget, companies = [], countries = [], genres = [], originalTitle, overview, poster, releaseDate} = props.info;
    const {rel = []} = props;
    return (
        <React.Fragment>
            {console.log(related)}
            <div className={styles.wrapper}>
                <div className={styles.poster}>
                    <img src={`http://image.tmdb.org/t/p/w300${poster}`} alt={originalTitle} className={styles.poster}/>
                </div>
                <div className={styles.content}>
                    <h1 className={styles.content__title}>{originalTitle}</h1>
                    <div className={styles.overview}>
                        <h3 className={styles.sub__title}>Description:</h3>
                        <p className={styles.overview__text}> {overview}</p>
                    </div>
                    <ul className={styles.content__item}>
                        <h3 className={styles.sub__title}>Genres:</h3>
                        {genres.map(item => <li className={styles.list__item}
                                                key={item.id}>{item.name}</li>)}
                    </ul>
                    <div className={styles.content__item}>
                        <h3 className={styles.sub__title}>
                            Release Date:
                            <span className={styles.sub__content}> {releaseDate}.</span>

                        </h3>
                    </div>
                    <div className={styles.content__item}>
                        <h3 className={styles.sub__title}>
                            Movie Budget:
                            <span className={styles.sub__content}> {budget}.</span>
                        </h3>
                    </div>
                    <div className={styles.content__item}>
                        <h3 className={styles.sub__title}>Companies</h3>
                        <ul className={styles.list}>
                            {companies.map(item => <li className={styles.list__item}
                                                       key={item.id}>{item.name}</li>)}
                        </ul>
                    </div>
                    <div className={styles.content__item}>
                        <div className={styles.movie__countries}>
                            <h3 className={styles.sub__title}>Countries</h3>
                            <ul className={styles.list}>
                                {countries.map(item => <li className={styles.list__item}
                                                           key={item.name}>{item.name}</li>)}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className={styles.sub__title}>Crew List:</h3>
                        <ul className={styles.list}>
                            {crew.slice(0, 7).map(item => <li key={item.id}
                                                              className={styles.list__item}>{item.name}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <ul>
                    {rel.map(item => <li key={rel.id}>{item.original_title}</li>)}
                </ul>
            </div>
        </React.Fragment>
    )
};

export default MovieDetailsItemLayout;