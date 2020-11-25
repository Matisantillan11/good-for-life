import React, {useState} from "react"
import {Redirect} from 'react-router-dom'

import "../assets/styles/pages/Register.css"

import firebase from 'firebase/app'
import auth from "../firebase/auth/Authentication"

import swal from 'sweetalert2'

import twitter_logo from "../assets/images/twitter.svg"
import facebook_logo from "../assets/images/facebook.svg"
import google_logo from "../assets/images/google.svg"

const Register = () => {
    const swal = require('sweetalert2')
    const [names, setNames] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const submit = () =>{
        console.log(email, password)
    }

    const CreateAccount = async () => {
        await firebase.auth()
                .createUserWithEmailAndPassword(email, password)
                .then(result => {
                        result.user.updateProfile({
                                displayName: names
                        })
                        const config = {
                                url: 'http://localhost:3000'
                        }
                        result.user.sendEmailVerification(config)
                                .catch(error => {
                                        
                                        swal.fire({
                                            icon: 'error',
                                            title: 'Ops..',
                                            text: `${error.message}`,
                                        })
                                })
                        firebase.auth().signOut()
                        swal.fire({
                            icon: 'success',
                            title: `Bienvenido ${names}`,
                            text: 'No te olvides de chequear tu email y hacer el proceso de verificación.'
                        })
                })
                .catch(error => {
                    swal.fire({
                        icon: 'error',
                        title: 'Ops..',
                        text: `${error.message}`,
                    })
                }) 

}

    return (
        <div className="main">
        <div className="form-conteiner-register">
            <form className="form">
            <div className="register-conteiner">
                <label className="title-register">
                Username
                <input 
                onChange = {(ev) => setNames(ev.target.value)}
                className="register-input" 
                type="text" />
                </label>
                <label className="title-register">
                Email
                <input 
                onChange = {(ev) => setEmail(ev.target.value)}
                className="register-input email"
                type="email" />
                </label>
                <label className="title-register">
                Contraseña
                <input 
                onChange = {(ev) => setPassword(ev.target.value)}
                className="register-input" 
                type="password" />
                </label>
                <label>
                <input className="check" type="checkbox" />
                Soy vendedor
                </label>
            </div>
            <div className="login-with">
                <a onClick={auth.AuthGoogleAccount} className="login-with_links">
                <img
                    className="login-with_links--logo"
                    src={google_logo}
                    alt="Logo google"
                />
                </a>
                <a  onClick={auth.AuthFacebookAccount}  className="login-with_links">
                <img
                    className="login-with_links--logo"
                    src={facebook_logo}
                    alt="Logo facebook"
                />
                </a>
                <a onClick={auth.AuthTwitterAccount}  className="login-with_links">
                <img
                    className="login-with_links--logo"
                    src={twitter_logo}
                    alt="Logo twitter"
                />
                </a>
            </div>
            <div className="send-register">
                <p>
                Asegúrese de que tenga al menos 8 caracteres, incluido un número y
                una letra mayúscula
                </p>
                <input
                onClick={CreateAccount}
                className="register-btn"
                type="button"
                value="Registrarse en GoodForLife"
                />
            </div>
            </form>
        </div>
        </div>
    )
};

export default Register;
