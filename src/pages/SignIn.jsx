import React from 'react'
import {Link} from 'react-router-dom'

import "../assets/styles/index.css"
import '../assets/styles/pages/SignIn.css'

import Auth from '../firebase/auth/Authentication'

import twitter_logo from '../assets/images/twitter.svg'
import facebook_logo from '../assets/images/facebook.svg'
import google_logo from '../assets/images/google.svg'





const SignIn = () => {
        /* const authEmailPass = (email, password) => {
                firebase.auth().signInWithEmailAndPassword(email, password)
                        .then(result => {
                                if (result.user.emailVerified){

                                }
                        })
        } */
        return (

                <div>
                        <main className="SignIn">
                                <div className="conteiner">
                                        <section className="form-conteiner">
                                                <h1 className="title-form">Inicio de sesión</h1>
                                                <form className="SignIn-form">
                                                        <div className="login-conteiner">
                                                                <input className="login-text" type="email" name="Correo" id="" placeholder="Correo electónico" />
                                                                <input className="login-text" type="password" placeholder="Contraseña" />
                                                                <input className="login-button" type="submit" value="Ingresar" />
                                                        </div>

                                                        <div className="login-with">
                                                                <a onClick={Auth.AuthGoogleAccount} className="login-with_links"><img className = "login-with_links--logo"src={google_logo} alt="Logo google"/></a>
                                                                <a onClick={Auth.AuthFacebookAccount} className="login-with_links"><img className = "login-with_links--logo"src={facebook_logo} alt="Logo facebook"/></a>
                                                                <a onClick={Auth.AuthTwitterAccount} className="login-with_links"><img className = "login-with_links--logo"src={twitter_logo} alt="Logo twitter"/></a>
                                                        </div>
                                                </form>
                                                <p className="register-text">¿Aún no estás registrado?</p>
                                                <Link to="/Register">Registrarse</Link>
                                        </section>

                                </div>
                        </main>
                </div>
        )
}

export default SignIn