//Vamos a ver el hook react-router-dom: Routes, Route, Link, Navigate

import { Link, Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "./route/Navbar"
import Home from "./views/Home"
import Results from "./views/Results"
import SearchView from "./views/SearchView"
import './i18n';

//BrowserRouter es un componente que engloba a otros componentes
//se un HOC, es decir, un componente de nivel superior
//Todos los hijos tiene acceso a lo que provee el padre


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
            <Route path="/search/:city?" element={<Results/>}/>
          </Routes>
    </>
  )
}

