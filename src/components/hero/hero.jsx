import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './hero.scss'
import { MovieService } from '../movie-service/movie-service'
const Hero = () => {
  const [data,setData] = useState({
    movie: {},
    isLoad: false,
    err: false,
  })
  const movieService = new MovieService()

  const getMovie = () => {
    movieService.getRandomMovie()
    .then(res => {
      setData({...data,movie: res})
    })
    .catch( err => {
      setData({...data,err: true})
      console.log(`Error: ${err}`)
    })
    .finally(() => {
      setData({...data,isLoad: true})
    })
  }

  useEffect(()=>getMovie(),[])

  const {movie,isLoad,err} = data
    
    return (

      <>
        <div  className='hero'>
          <div className="hero__info">
            <p className="hero__info-title">FIND MOVIE</p>
            <h1>TV Shows and more</h1>
            <p className="hero__info-descr">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia asperiores aperiam quos vitae earum placeat officia hic velit. Eos, ullam?
            </p>
            <button className="btn btn-primary">DETAILS</button>
          </div>
          {err ?
          <div className="err-div">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEFmupcWqhgg-1tB1ftDWQV3R2R9fAWmi8YA&s" alt="error-404" />
            <p className="err-text">Oops!</p>
          </div> : ''}

          <div style={{display: (err)?'none':''}} className="hero__movie">
            <div className="hero__movie-item">
              {(isLoad)?<HeroMovie movie={movie}/>:<div className="loader"></div>}
            </div>
            <div className="hero__movie-btns">
              <button className="btn btn-primary">Details</button>
              <button className="btn btn-secondary">Random Movie</button>
            </div>
          </div>
        </div>
        
      </>
    )
}


export default Hero
const HeroMovie = (props) => {
  const {name,descr,thumb} = props.movie
    return (
      <>
        <img src={thumb} alt="movie-img" className="hero__movie-img" />
        <div className="hero__movie-descr">
          <p className="hero__movie-title">{name}</p>
          <p className="hero__movie-info">
            {descr}
          </p>
        </div>
      </>
    )
}


HeroMovie.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string,
    descr: PropTypes.string,
    thumb: PropTypes.string,
  }),
};