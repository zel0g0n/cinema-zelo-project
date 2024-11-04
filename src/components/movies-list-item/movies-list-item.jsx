import PropTypes from 'prop-types'
import './movies-list-item.scss'

const MoviesListItem = ({data,onToggle}) => {
  const {src,alt,year,duration,name} = data
  return (
    <li onClick={onToggle} className='rowmovies__list-item'>
      <img src={src}  alt={alt} className="rowmovies__list-item--img" />
      <p className="rowmovies__list-item--name">{name}</p>
      <p className="rowmovies__list-item--info">
        <span>{year}</span>
        <span className="br-dot">
          <i className="fa-solid fa-circle"></i>
        </span>
        <span>{duration}m</span>
      </p>
    </li>
  )
}
MoviesListItem.propTypes = {
  data: PropTypes.object,
  onToggle: PropTypes.func,
}
export default MoviesListItem