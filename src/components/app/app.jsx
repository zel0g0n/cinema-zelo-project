import Header from "../header/header"
import Hero from "../hero/hero"
import RowMovies from "../row-movies/row-movies"
import { ErrorBoundary } from "../error-boundary/error-catch"
import './app.scss'
const App = () => {
  return (
    <div className="app">
      <Header/>
      <Hero/>
      <ErrorBoundary>
        <RowMovies/>
      </ErrorBoundary>
      
    </div>
  )
}
export {App}