import './App.css'

import {BrowserRouter, Routes, Route}from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import NavBar from './components/NavBar';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
