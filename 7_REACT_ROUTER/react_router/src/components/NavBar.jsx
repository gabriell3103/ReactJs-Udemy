// 2 - links com react router

import { Link } from 'react-router-dom'

import "./Navbar.css";

const NavBar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
    </nav>
  )
}

export default NavBar