import img from '/tranding.svg'
import './row-movies.scss'
import React from 'react'
import { MovieService } from '../movie-service/movie-service'
import MoviesListItem from '../movies-list-item/movies-list-item'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import MovieInfo from '../movie-info/movie-info'
class RowMovies extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movieList: [],
      open: false,
    }
  }


  movieService = new MovieService()
  
  getPopularMovies() {
    this.movieService._filterPopularMovie()
    .then(res => {
      this.setState({movieList: res})
      console.log(res)
    })
  }
  
  componentDidMount() {
    this.getPopularMovies()
  }
  onToggle = () => {
    this.setState(state => ({open: !state.open}))
  }

  render() {
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
        <ul className="rowmovies__list">
          {this.state.movieList.map( item => (<MoviesListItem key={item.id} data={item} onToggle={this.onToggle}/>))}
        </ul>
        <Modal open={this.state.open} onClose={this.onToggle}>
          <MovieInfo></MovieInfo>
        </Modal>
      </div>
    )
  }
}
// const RowMovies = () => {

//   // const movieSeires = new MovieService()
//   // movieSeires.getPopular().then(data => console.log(data))

  
// }

export default RowMovies