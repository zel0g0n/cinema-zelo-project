
class MovieService {
  
  getResource = async (url) => {
    const response = await fetch(url)
    if(!response.ok) {
      throw(new Error)
    }

    return await response.json()
  }

  getPopular = async () => {
    return this.getResource('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=300fe233bd863fc86907cac7b2f9b7d1')
  }
}

export {MovieService}