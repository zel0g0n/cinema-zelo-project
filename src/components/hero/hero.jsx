import React from 'react'
import PropTypes from 'prop-types'
import './hero.scss'
import { MovieService } from '../movie-service/movie-service'
class Hero extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: {},
      isLoad: false,
      err: false,
    }

  }
  movieService = new MovieService()

  getMovie = () => {
    this.movieService.getRandomMovie()
    .then(res => {
      this.setState({movie: res})
    })
    .catch( err => {
      this.setState({err: true})
      console.log(`Error: ${err}`)
    })
    .finally(() => {
      this.setState({isLoad: true})
    })
  }
  
  componentDidMount() {
    this.getMovie()
  }

  render() {
    const {movie,isLoad,err} = this.state
    
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
}

export default Hero

class HeroMovie extends React.Component {

  render() {
    const {name,descr,thumb} = this.props.movie
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
}

HeroMovie.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string,
    descr: PropTypes.string,
    thumb: PropTypes.string,
  }),
};