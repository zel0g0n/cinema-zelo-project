import { useParams } from 'react-router-dom'
import { ErrorBoundary } from '../error-boundary/error-catch'
import { useMovieService } from '../movie-service/movie-service'
import './detail-page.scss'
import { useEffect, useState } from 'react'
const DetailPage = () => {
  const [movieData, setMovieData] = useState({})
  const params = useParams()
  const {getDetailedMovie} = useMovieService()

  useEffect(()=>{
    getDetailedMovie(params.movieID)
    .then(res => setMovieData(res))

  },[params])


  return (
    <div className='detailed'>
      <ErrorBoundary>
        <div className="detailed__item">
          <img src={movieData.thumb} alt="image" />
        </div>
        <div className="detailed__info">
          <p className="detailed__info-title">{movieData.name}</p>
          <p className="detailed__info-descr">
            {movieData.descr}
          </p>
          <p className="detailed__info-release">
            {movieData.release}
          </p>
        </div>

      </ErrorBoundary>
    </div>
  )
}

export default DetailPage