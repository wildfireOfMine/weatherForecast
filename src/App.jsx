import { Link, Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "./route/Navbar"
import Home from "./views/Home"
import Results from "./views/Results"
import SearchView from "./views/SearchView"
import './i18n';

export const App = () => {
  return (
    <>
          <h1>App</h1>
          <Navbar/>
          

          <hr/>

          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/search" element={<SearchView/>}/>
            <Route path="/search/:city" element={<Results/>}/>
          </Routes>
    </>
  )
}

