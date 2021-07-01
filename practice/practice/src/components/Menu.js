import React from 'react'
import { NavLink, BrowserRouter as Router, Prompt } from 'react-router-dom'
import Providers from '../GlobalProvider';
import { useContext } from 'react'
function Menu() {
    const value = useContext(Providers);
    return (


        <nav className="navbar">

            <div className="brand-name">MyLobby</div>

            <NavLink className="home" activeClassName="nav-home" exact to="/">Home</NavLink>
            <NavLink className="about" activeClassName="nav-about" exact to="/about">About</NavLink>
            <NavLink className="contact" exact to="/contact">Contact</NavLink>
            <NavLink className="login" exact to="/login">Login</NavLink>

        </nav>

    )
}

export default Menu
