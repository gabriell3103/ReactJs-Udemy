import './App.css'

// config do React Router
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

// components
import NavBar from './components/NavBar';
import SearchForm from './components/SearchForm';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Search from './pages/Search';



function App() {

  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
        {/* 2 - links com react router */}
        <NavBar />
        {/* Search */}
        <SearchForm />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          {/* 6 - nested routes */}
          <Route path='/products/:id/info' element={<Info/>}></Route>
          {/* 4 - rota dinâmica */}
          <Route path='/products/:id' element={<Product/>}></Route>
          {/* 9 - Search */}
          <Route path='/search' element={<Search/>}></Route>
          {/* 10 - Redirect */}
          <Route path='/company' element={<Navigate to="/about"/>}></Route>
          {/* 7 - No match route */}
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
