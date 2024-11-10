import HomePage from "../pages/home-page"
import Header from "../header/header"
import TvPage from "../pages/tv-page"
import DetailPage from "../pages/detail-page"
import { Routes, Route } from "react-router-dom"
import ErrorPage from "../pages/error-page"
import RowMovies from "../row-movies/row-movies"
import './app.scss'
const App = () => {
  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/tv" element={<TvPage></TvPage>} />
        <Route path='/movie/:movieID' element={<DetailPage/>} />
        <Route path='/popular' element={<RowMovies/>} />
        <Route path='/tranding' element={<RowMovies/>} />
        <Route path="*" element={<ErrorPage></ErrorPage>} />
      </Routes>
    </div>
  )
}
export {App}