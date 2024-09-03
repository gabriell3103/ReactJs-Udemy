// 2 - links com react router

import { Link, NavLink } from 'react-router-dom'

import "./Navbar.css";

const NavBar = () => {
  return (
    <nav>
        {/* <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link> */}
        <NavLink to="/"  /* className={({isActive}) => (isActive ? "está-ativo" : "não-ativo")}*/>Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
    </nav>
  )
}

export default NavBar