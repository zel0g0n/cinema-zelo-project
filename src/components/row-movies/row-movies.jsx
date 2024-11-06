import img from '/tranding.svg'
import './row-movies.scss'
import React from 'react'
import { MovieService } from '../movie-service/movie-service'
import MoviesListItem from '../movies-list-item/movies-list-item'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import MovieInfo from '../movie-info/movie-info'
class RowMovies extends React.Component {
    state = {
      movieList: [],
      open: false,
      detailsMovie: {},
      page: 2
    }


  movieService = new MovieService()
  
  getPopularMovies() {
    this.movieService._filterPopularMovie()
    .then(res => {
      this.setState({movieList: res})
    })
  }
  
  loadMoreMovies = () => {
    const {page} = this.state
    this.movieService.loadMore(page)
    .then(res => {
      this.setState(({page,movieList}) => (
        {
          page: page+1,
          movieList: [...movieList,...res]
        }
      ))
    })
  }
  componentDidMount() {
    this.getPopularMovies()
  }
  closeModal = () => {
    this.setState({open: false})
    
  }

  openModal  = (id) => {
    this.movieService.getDetailedMovie(id)
    .then(res => {
      this.setState({detailsMovie: res,open: true})
    })
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
          {this.state.movieList.map( item => (<MoviesListItem key={item.id} data={item} openModal={() => this.openModal(item.id)}/>))}
        </ul>
        <div className='load-more'>
          <button onClick={this.loadMoreMovies} className="btn btn-primary">Load More...</button>
        </div>
        <Modal open={this.state.open} onClose={this.closeModal}>
          <MovieInfo data={this.state.detailsMovie}></MovieInfo>
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