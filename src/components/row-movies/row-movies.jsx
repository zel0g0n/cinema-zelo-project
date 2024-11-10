import img from '/tranding.svg'
import './row-movies.scss'
import { useEffect, useState } from 'react'
import { useMovieService } from '../movie-service/movie-service'
import MoviesListItem from '../movies-list-item/movies-list-item'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import MovieInfo from '../movie-info/movie-info'
import { useLocation } from 'react-router-dom'


const RowMovies = () => {
  const [state,setState] = useState({
    movieList: [],
    open: false,
    detailsMovie: {},
    page: 2
  })
  

  const {getAllTranding,getAllPopular,_filterPopularMovie,loadMore,getDetailedMovie} = useMovieService()
  const {pathname} = useLocation()

  function getChoosenMovies(func) {
    _filterPopularMovie(func)
    .then(res => {
      setState({...state,movieList: res})
    })
  }
  
  
  
  const loadMoreMovies = () => {
    const {page} = state
    loadMore(page)
    .then(res => {
      setState((prevData) => (
        {
          ...prevData,
          page: prevData.page+1,
          movieList: [...prevData.movieList,...res]
        }
      ))
    })
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(()=>{
    if(pathname=='/popular') {
      getChoosenMovies(getAllPopular)
    }else {
      getChoosenMovies(getAllTranding)
    }
  },[pathname])

  const closeModal = () => {
    setState(prevState => ({...prevState,open: false}))
    
  }

  const openModal  = (id) => {
    getDetailedMovie(id)
    .then(res => {
      setState(prevState => ({...prevState,detailsMovie: res,open: true}))
    })
  }
  

  return (
    <div className='rowmovies'>
      
      <div className="rowmovies__top">
        <div className="rowmovies__top-title">
          <img src={img} alt="tranding" />
          <h3>{(pathname=='/popular')?"Popular":"Tranding"}</h3>
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