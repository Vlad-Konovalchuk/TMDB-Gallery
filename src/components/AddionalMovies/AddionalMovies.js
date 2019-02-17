import React from 'react'
import MovieItem from '../MovieItem/MovieItem'
import styles from './AdditionalMovies.module.css'

const AdditionalMovies = ({ data }) => {
  const items = data.slice(0, 7).map((item) => <MovieItem key={item.id} movie={item}/>)
  if (data.length === 0) {
    return (<h3>Sorry but we have not a similar movies :(</h3>)
  }
  return (
    <div className={styles.additional}>
      {(data.length > 0) && items}
    </div>
  )
}

export default AdditionalMovies
