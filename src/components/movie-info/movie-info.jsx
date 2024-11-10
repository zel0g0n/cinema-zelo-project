import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import './movie-info.scss'
const MovieInfo = (props) => {
  const navigate = useNavigate()
  const {name, thumb, descr, id} = props.data
  return (
    <div className='movie-info'>
      <img src={thumb} alt="img" />
      <p className="movie-info--title">{name}</p>
      <p className="movie-info--descr">
        {descr}
      </p>
      <button onClick={()=>navigate(`/movie/${id}`)} className='btn btn-detail'>Details</button>
    </div>
  )
}

MovieInfo.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    thumb: PropTypes.string,
    descr: PropTypes.string,
    id: PropTypes.number,
  })
}
export default MovieInfo