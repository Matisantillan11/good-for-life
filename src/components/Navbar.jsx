import React from 'react'
import {Link , Redirect} from 'react-router-dom'

import logonav from '../assets/images/logo.svg'
import search from '../assets/images/search.png'

import firebase from 'firebase/app'
import 'firebase/auth'

import swal from 'sweetalert2'


import '../assets/styles/Navbar.css'
const Navbar = () => {
        const userState = firebase.auth().onAuthStateChanged(user =>{
                
            if(user){
                <Redirect to="/" />
                swal.fire({
                    icon:'success',
                    title: `Bienvenido ${user.displayName}`,
                    text: 'Has ingresado correctamente'
                })
            }
        })

        const user = firebase.auth().currentUser

        const SignOut = () =>{
            
            if (userState){
                firebase.auth().signOut().then(()=>{
                    swal.fire({
                        icon: 'success',
                        title: 'Te esperamos pronto',
                        text: 'Cierre de sesión exitoso'
                    })
                }).catch(error =>{
                    swal.fire({
                        icon: 'error',
                        title: 'Ops...',
                        text: `${error}`
                    })
                })
            }
        }
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
                                    <Link onClick = {SignOut} id="btnSignIn" className="button-navbar" to="/SignIn">{user ? 'Iniciar' : 'Salir'}</Link>      
                                </div>
                            </header>    
            </div>
        )}

export default Navbar