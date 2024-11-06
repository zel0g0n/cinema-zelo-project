import PropTypes from 'prop-types'
import './movies-list-item.scss'

const MoviesListItem = ({data,onToggle}) => {
  const {thumb,alt,release,name,} = data
  console.log(name)
  return (
    <li onClick={onToggle} className='rowmovies__list-item'>
      <img src={thumb}  alt={alt} className="rowmovies__list-item--img" />
      <p className="rowmovies__list-item--name">{name}</p>
      <p className="rowmovies__list-item--info">
        <span>{release}</span>
        <span className="br-dot">
          <i className="fa-solid fa-circle"></i>
        </span>
        <span>{132}m</span>
      </p>
    </li>
  )
}
MoviesListItem.propTypes = {
  data: PropTypes.object,
  onToggle: PropTypes.func,
}
export default MoviesListItem