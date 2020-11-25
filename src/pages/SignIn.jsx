import React , {useState} from 'react'
import {Link} from 'react-router-dom'

import "../assets/styles/index.css"
import '../assets/styles/pages/SignIn.css'

import firebase from 'firebase/app'
import Auth from '../firebase/auth/Authentication' 

import twitter_logo from '../assets/images/twitter.svg'
import facebook_logo from '../assets/images/facebook.svg'
import google_logo from '../assets/images/google.svg'





const SignIn = () => {
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')


        const authEmailPass = async () => {
                await firebase.auth().signInWithEmailAndPassword(email, password)
                        .then(result => {
                                if (result.user.emailVerified){
                                        alert(`Bienvenido/*  ${result.user.displayName} */`)
                                } else {
                                        alert('Debes realizar el proceso de verificación')
                                }
                        }).catch(error =>{
                                alert(`${error}`)
                        })
                       
                                
        }

        return (
        
                <div>
                        <main className="SignIn">
                                <div className="conteiner">
                                        <section className="form-conteiner">
                                                <h1 className="title-form">Inicio de sesión</h1>
                                                <form className="SignIn-form">
                                                        <div className="login-conteiner">
                                                                <input  
                                                                onChange = {(ev) => setEmail(ev.target.value)} 
                                                                className="login-text" 
                                                                type="email"  
                                                                placeholder="Correo electónico" />
                                                                <input  
                                                                onChange = {(ev) => setPassword(ev.target.value)}
                                                                className="login-text" 
                                                                type="password" 
                                                                placeholder="Contraseña" />
                                                                <input  
                                                                onClick={authEmailPass} 
                                                                className="login-button" 
                                                                type="button" 
                                                                value="Ingresar" />
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