import img from '/tranding.svg'
import './row-movies.scss'
import { useEffect, useState } from 'react'
import { MovieService } from '../movie-service/movie-service'
import MoviesListItem from '../movies-list-item/movies-list-item'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import MovieInfo from '../movie-info/movie-info'


const RowMovies = () => {
  const [state,setState] = useState({
    movieList: [],
    open: false,
    detailsMovie: {},
    page: 2
  })

  const movieService = new MovieService()

  function getPopularMovies() {
    movieService._filterPopularMovie()
    .then(res => {
      setState({...state,movieList: res})
    })
  }
  const loadMoreMovies = () => {
    const {page} = state
    movieService.loadMore(page)
    .then(res => {
      setState(({page,movieList}) => (
        {
          ...state,
          page: page+1,
          movieList: [...movieList,...res]
        }
      ))
    })
  }
  useEffect(()=>getPopularMovies(),[])

  const closeModal = () => {
    setState({...state,open: false})
    
  }

  const openModal  = (id) => {
    movieService.getDetailedMovie(id)
    .then(res => {
      setState({...state,detailsMovie: res,open: true})
    })
  }
  

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
        {state.movieList.map( item => (<MoviesListItem key={item.id} data={item} openModal={() => openModal(item.id)}/>))}
      </ul>
      <div className='load-more'>
        <button onClick={loadMoreMovies} className="btn btn-primary">Load More...</button>
      </div>
      <Modal open={state.open} onClose={closeModal}>
        <MovieInfo data={state.detailsMovie}></MovieInfo>
      </Modal>
    </div>
  )
}



export default RowMovies