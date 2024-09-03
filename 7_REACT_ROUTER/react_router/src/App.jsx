import './App.css'

// config do React Router
import {BrowserRouter, Routes, Route} from "react-router-dom"

// pages
import Home from './pages/Home';
import About from './pages/About';

// components
import NavBar from './components/NavBar';
import Product from './pages/Product';

function App() {

  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
        {/* 2 - links com react router */}
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          {/* 4 - rota dinâmica */}
          <Route path='/products/:id' element={<Product/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
