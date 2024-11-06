import PropTypes from 'prop-types'
import './movie-info.scss'
const MovieInfo = (props) => {
  const {name, thumb, descr} = props.data
  return (
    <div className='movie-info'>
      <img src={thumb} alt="img" />
      <p className="movie-info--title">{name}</p>
      <p className="movie-info--descr">
        {descr}
      </p>
    </div>
  )
}

MovieInfo.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    thumb: PropTypes.string,
    descr: PropTypes.string,
  })
}
export default MovieInfo