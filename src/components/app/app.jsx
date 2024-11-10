import HomePage from "../pages/home-page"
import Header from "../header/header"
import { Routes, Route } from "react-router-dom"
import ErrorPage from "../pages/error-page"
import { lazy, Suspense } from "react"
import Loading from "../loading/loading"
import './app.scss'

const TvPage = lazy(()=>(import("../pages/tv-page")))
const DetailPage = lazy(()=>(import("../pages/detail-page")))
const RowMovies = lazy(()=>(import("../row-movies/row-movies")))
const App = () => {
  return (
    <div className="app">
      <Header/>
      <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/tv" element={<TvPage></TvPage>} />
        <Route path='/movie/:movieID' element={<DetailPage/>} />
        <Route path='/popular' element={<RowMovies/>} />
        <Route path='/tranding' element={<RowMovies/>} />
        <Route path="*" element={<ErrorPage></ErrorPage>} />
      </Routes>
      </Suspense>
      
    </div>
  )
}
export {App}