import img from '/tranding.svg'
import './row-movies.scss'

const RowMovies = () => {
  return (
    <div className='rowmovies'>
      <div className="rowmovies__top">
        <div className="rowmovies__top-title">
          <img src={img} alt="tranding" />
          <h3>Trending</h3>
        </div>
        <div className="hr"></div>
        <a href="#" className="rowmovies__top-more">See More</a>
      </div>
      <div className="rowmovies__list">
        
      </div>
    </div>
  )
}

export default RowMovies