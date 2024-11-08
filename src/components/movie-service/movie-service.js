import { useHttp } from "../use-http/use-http"
const  useMovieService = () => {
  const {request} = useHttp()
  const _apiBase = 'https://api.themoviedb.org/3',
        _apiLanguage = 'language=en-US',
        _apiKey = 'api_key=300fe233bd863fc86907cac7b2f9b7d1',
        _apiImg = 'https://image.tmdb.org/t/p/original/'

  const getAllPopular = async () => {
    console.log(await request(`${_apiBase}/movie/popular?${_apiLanguage}&page=1&${_apiKey}`))
    return request(`${_apiBase}/movie/popular?${_apiLanguage}&page=1&${_apiKey}`)
  }
  const getAllTranding = async () => {
    return request(`${_apiBase}/movie/top_rated?${_apiLanguage}&page=1&${_apiKey}`)

  }
  const getDetailedMovie = async (id) => {
    const res = await request(`${_apiBase}/movie/${id}?language=en-US&api_key=300fe233bd863fc86907cac7b2f9b7d1`)
    return _transformMovie(res)
  }
  const getRandomMovie = async () => {
    const res = await getAllPopular()
    const movie = res.results[Math.floor(Math.random()*res.results.length)]
    return _transformMovie(movie)
  }

  const loadMore = async (page) => {
    const res = await request(`${_apiBase}/movie/popular?${_apiLanguage}&page=${page}&${_apiKey}`)
    const moviesList = res.results
    return await Promise.all(moviesList.map(item => _transformMovie(item)))

  }

  const _filterPopularMovie = async () => {
    const res = await getAllPopular()
    const moviesList = res.results
    return await Promise.all(moviesList.map(item =>  _transformMovie(item)))
    
  }
  
  

  const _transformMovie = async (movie) => {
    return {
      name: movie.original_title,
      descr: (movie.overview.length > 200)?movie.overview.slice(0,200)+'...':movie.overview,
      thumb: `${_apiImg}${movie.backdrop_path}`,
      id: movie.id,
      release: movie.release_date.slice(0,4),
    }
  }

  return {_filterPopularMovie,loadMore,getRandomMovie,getAllTranding,getDetailedMovie}
}
export {useMovieService}