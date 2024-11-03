import movieImg from '/image1.svg'
import './hero.scss'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero__info">
        <p className="hero__info-title">FIND MOVIE</p>
        <h1>TV Shows and more</h1>
        <p className="hero__info-descr">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia asperiores aperiam quos vitae earum placeat officia hic velit. Eos, ullam?
        </p>
        <button className="btn btn-primary">DETAILS</button>
      </div>
      <div className="hero__movie">
        <img src={movieImg} alt="movie-img" className="hero__movie-img" />
        <div className="hero__movie-descr">
          <p className="hero__movie-title">Madellene</p>
          <p className="hero__movie-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum magni, quaerat consectetur quibusdam sint eius blanditiis odit quas asperiores quae explicabo incidunt. Vero, nisi minima!
          </p>
        </div>
        <div className="hero__movie-btns">
          <button className="btn btn-primary">Details</button>
          <button className="btn btn-secondary">Random Movie</button>
        </div>
      </div>
    </div>
  )
}

export default Hero