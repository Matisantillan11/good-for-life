import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import logonav from '../assets/images/logo.svg'
import search from '../assets/images/search.png'

import firebase from 'firebase/app'
import 'firebase/auth'

import '../assets/styles/Navbar.css'

class Navbar extends Component {
    
    
    componentWillMount(){
        
        firebase.auth().onAuthStateChanged(user =>{
            const btnNav = document.getElementById('btnSignIn')
            if(user){
                btnNav.innerHTML = "Salir"
                btnNav.onclick = this.handleLogOut
            }
        })
    }
    
    handleLogOut = () =>{
        firebase
        .auth()
        .signOut()
        .then((result) => {
            window.location.href = "/";
        })
        .catch((error) => console.log(`Error ${error.code}: ${error.message}`));
        }
    
    render(){

        return(
            <div>
                <header className = "navbar"> 
                                <div className="logo-container">
                                    <img src={logonav} className = "logo" alt="Logo Good4Life"/>
                                    <Link to="/">GOOD4LIFE</Link>         
                                </div>
                                <ul className="menu">
                                    <a className="item" href="menu.html">Menúes</a>
                                    <a className="item" href="">Sobre Nosotros</a>
                                    <a className="item" href="">¿Cómo comprar?</a>
                                </ul>
                                <div className="search_container">
                                    <div className="search_container--searcher">
                                        <input placeholder="¿Qué estás buscando?"className="search"type="text"/>
                                        <img className="search-img"src={search} alt="Search icon"/>
                                    </div>
                                    <Link id="btnSignIn" className="button-navbar" to="/SignIn">Iniciar</Link> 
                                </div>
                            </header>    
            </div>
        )}
    }

export default Navbar