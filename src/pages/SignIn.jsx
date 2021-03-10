import React , {Component, useState} from 'react'
import {Link} from 'react-router-dom'

import "../assets/styles/index.css"
import '../assets/styles/pages/SignIn.css'

import firebase from 'firebase/app'


import twitter_logo from '../assets/images/twitter.svg'
import facebook_logo from '../assets/images/facebook.svg'
import google_logo from '../assets/images/google.svg'

import swal from 'sweetalert2'



class SignIn extends Component {
        

        authEmailPass = async () => {
                await firebase.auth().signInWithEmailAndPassword()
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

        AuthGoogleAccount = () => {
                const provider = new firebase.auth.GoogleAuthProvider()
                firebase.auth()
                        .signInWithPopup(provider)
                        .then(result => {
                                this.props.history.push(`/`)
                                swal.fire({
                                        icon:'success',
                                        title: `Bienvenido ${result.user.displayName}`,
                                        text: 'Has ingresado correctamente'
                                })
                        })
                        .catch(error => {
                                swal.fire({
                                        icon:'error',
                                        title: `Error`,
                                        text: error.message
                                })  
                        })
        }

        AuthFacebookAccount = () =>{
                const provider = new firebase.auth.FacebookAuthProvider()
                firebase.auth()
                        .signInWithPopup(provider)
                        .then(result =>{
                                swal.fire({
                                        icon:'success',
                                        title: `Bienvenido ${result.user.displayName}`,
                                        text: 'Has ingresado correctamente'
                                })
                        })
                        .catch(error =>{
                                swal.fire({
                                        icon:'error',
                                        title: `Error`,
                                        text: error.message
                                })  
                        })                
        }
        AuthTwitterAccount = () =>{
                const provider = new firebase.auth.TwitterAuthProvider()

                firebase.auth()
                        .signInWithPopup(provider)
                        .then(result =>{
                                swal.fire({
                                        icon:'success',
                                        title: `Bienvenido ${result.user.displayName}`,
                                        text: 'Has ingresado correctamente'
                                })
                        })
                        .catch(error =>{
                                swal.fire({
                                        icon:'error',
                                        title: `Error`,
                                        text: error.message
                                })  
                        })
        }
        render(){

                return (
                
                        <div>
                                <main className="SignIn">
                                        <div className="conteiner">
                                                <section className="form-conteiner">
                                                        <h1 className="title-form">Inicio de sesión</h1>
                                                        <form className="SignIn-form">
                                                                <div className="login-conteiner">
                                                                        <input  
                                                                       
                                                                        className="login-text" 
                                                                        type="email"  
                                                                        placeholder="Correo electónico" />
                                                                        <input  
                                                                        
                                                                        className="login-text" 
                                                                        type="password" 
                                                                        placeholder="Contraseña" />
                                                                        <input  
                                                                        
                                                                        onClick={this.authEmailPass} 
                                                                        className="login-button" 
                                                                        type="submit" 
                                                                        value="Ingresar" />
                                                                </div>
                                                                <div className="login-with">
                                                                        <a onClick={this.AuthGoogleAccount} className="login-with_links"><img className = "login-with_links--logo"src={google_logo} alt="Logo google"/></a>
                                                                        <a onClick={this.AuthFacebookAccount} className="login-with_links"><img className = "login-with_links--logo"src={facebook_logo} alt="Logo facebook"/></a>
                                                                        <a onClick={this.AuthTwitterAccount} className="login-with_links"><img className = "login-with_links--logo"src={twitter_logo} alt="Logo twitter"/></a>
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
}


export default SignIn