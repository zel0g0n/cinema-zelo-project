import Header from "../header/header"
import Hero from "../hero/hero"
import RowMovies from "../row-movies/row-movies"
// import { MovieService } from "../movie-service/movie-service"
import './app.scss'
const App = () => {
  return (
    <div className="app">
      <Header/>
      <Hero/>
      <RowMovies/>
    </div>
  )
}
export {App}