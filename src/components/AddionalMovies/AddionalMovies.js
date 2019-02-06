import React from 'react'
import MovieItem from '../MovieItem/MovieItem'
import Slider from 'react-slick'

const AdditionalMovies = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
  }
  const items = data.map((item) => <MovieItem movie={item}/>)
  return (
    <>
      <h2>Additional Movies</h2>
      {(data.length > 0) && (
        <Slider {...settings}>
          {items}
        </Slider>)}
    </>
  )
}

export default AdditionalMovies
