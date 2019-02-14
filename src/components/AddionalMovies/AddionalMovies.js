import React from 'react'
import MovieItem from '../MovieItem/MovieItem'

const AdditionalMovies = ({ data }) => {
  const items = data.slice(0, 7).map((item) => <MovieItem movie={item}/>)
  return (
    <>
      <h2>Additional Movies</h2>
      {(data.length > 0) && items}
    </>
  )
}

export default AdditionalMovies
