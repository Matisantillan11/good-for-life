import React from 'react'

import logonav from '../assets/images/logo.svg'
import search from '../assets/images/search.png'

import '../assets/styles/Navbar.css'
const Navbar = () => (
     <header className = "navbar"> 
        <div className="logo-container">
            <img src={logonav} className = "logo" alt="Logo Good4Life"/>
            <a href="index.html">GOOD4LIFE</a>         
        </div>
        <ul className="menu">
            <a className="item" href="menu.html">Menú</a>
            <a className="item" href="">Sobre Nosotros</a>
            <a className="item" href="">¿Cómo comprar?</a>
        </ul>
        <div className="search_container">
            <div className="search_container--searcher">
                <input placeholder="¿Qué estás buscando?"className="search"type="text"/>
                <img className="search-img"src={search} alt="Search icon"/>
            </div>
            <a className="button-navbar" href="inicioSesion.html">Ingresar</a>
        </div>
    </header>
)

export default Navbar