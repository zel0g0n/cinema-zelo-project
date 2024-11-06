class MovieService {
  getResponse = async (url) => {
    try {
      const response = await fetch(url)

      if(!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`)
      }

      return await response.json()
    }
    catch(err) {
      console.log(err)
    }
  }
  _apiBase = 'https://api.themoviedb.org/3'
  _apiLanguage = 'language=en-US'
  _apiKey = 'api_key=300fe233bd863fc86907cac7b2f9b7d1'
  _apiImg = 'https://image.tmdb.org/t/p/original/'

  getAllPopular = async () => {
    return this.getResponse(`${this._apiBase}/movie/popular?${this._apiLanguage}&${this._apiKey}`)
  }
  getAllTranding = async () => {
    return this.getResponse(`${this._apiBase}/movie/top_rated?${this._apiLanguage}&${this._apiKey}`)

  }
  getDetailedMovie = async (id) => {
    return this.getResponse(`${this._apiBase}/movie/${id}?language=en-US&api_key=300fe233bd863fc86907cac7b2f9b7d1`)
  }
  getRandomMovie = async () => {
    const res = await this.getAllPopular()
    const movie = res.results[Math.floor(Math.random()*res.results.length)]
    return this._transformMovie(movie)
  }

  _filterPopularMovie = async () => {
    const res = await this.getAllPopular()
    const moviesList = res.results
    return await Promise.all(moviesList.map(item =>  this._transformMovie(item)))
    
  }
  

  _transformMovie = async (movie) => {
    return {
      name: movie.original_title,
      descr: (movie.overview.length > 200)?movie.overview.slice(0,200)+'...':movie.overview,
      thumb: `${this._apiImg}${movie.backdrop_path}`,
      id: movie.id,
      release: movie.release_date.slice(0,4),
    }
  }
}
export {MovieService}